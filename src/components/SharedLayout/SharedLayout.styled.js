import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 15px 15px;
  color: black;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: red;
  }
`;
