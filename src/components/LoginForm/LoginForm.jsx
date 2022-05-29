import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { Wrapper, TitleBox, SubmitButton, Title } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import * as authOperations from '../../redux/Auth/auth-operations';
import LoginIcon from '@mui/icons-material/Login';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(authOperations.login(values));
      actions.resetForm();
    },
  });

  return (
    <Wrapper>
      <TitleBox>
        <LoginIcon
          color="primary"
          sx={{
            fontSize: 70,
          }}
        />
        <Title> Sign In</Title>
      </TitleBox>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          margin="normal"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <SubmitButton
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Log In
        </SubmitButton>
      </form>
    </Wrapper>
  );
};

export default LogIn;
