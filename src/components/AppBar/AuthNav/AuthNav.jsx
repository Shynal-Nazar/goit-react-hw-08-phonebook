import { LinkIn, LinkUp, Box } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Box>
      <LinkIn to="/signIn">Sign in</LinkIn>
      <LinkUp to="/signUp">Sign up</LinkUp>
    </Box>
  );
};

export default AuthNav;
