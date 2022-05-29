import styled from '@emotion/styled';

export const StyledButton = styled.button`
  position: fixed;
  left: 94%;
  top: 85%;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const Title = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 18px;
  font-size: 20px;
  color: #4169e1;
`;

export const Image = styled.img`
  display: block;
  margin: auto;
  width: 300px;
  height: 300px;
`;

export const PhoneSection = styled.div`
  width: 400px;
  margin-right: 40px;
  border: 2px solid #9e9e9e;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.15);
`;

export const PhoneSectionName = styled.h2`
  font-weight: 900;
  font-size: 25px;
  text-align: center;
`;

export const PhoneForm = styled.form``;

export const PhoneLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
`;

export const PhoneInput = styled.input`
  padding: 8px;
  font-family: inherit;
`;

export const PhoneBtn = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;

  font-family: sans-serif;
  font-size: 16px;

  background-color: #2196f3;
  color: #fff;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #1976d2;
  }
`;
