import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkIn = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 25px;
  padding: 8px;
  margin-right: 20px;
  border-radius: 15px;
  border: 2px solid white;
  :hover {
    color: yellow;
    font-size: 30px;
    border: 4px solid yellow;
    transition: all 1s linear 0s;
  }
`;

export const LinkUp = styled(NavLink)`
  text-decoration: none;
  padding: 8px;
  border-radius: 15px;
  color: #fff;
  font-size: 25px;
  border: 2px solid #fff;
  :hover {
    color: yellow;
    font-size: 30px;
    border: 4px solid yellow;
    transition: all 1s linear 0s;
  }
`;

export const Box = styled.div`
  margin-right: 30px;
`;
