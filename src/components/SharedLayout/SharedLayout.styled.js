import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #4f4141;
  text-decoration: none;

  &.active {
    color: #8635a4;
  }
`;

export const Header = styled.header`
  background-color: aqua;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
  font-size: 30px;
  font-weight: 600;
  padding: 16px 16px 16px 35px;
`;

export const Main = styled.main`
  max-width: 1440px;
`;
