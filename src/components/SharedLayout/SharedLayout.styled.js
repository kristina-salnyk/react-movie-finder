import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: ${({ theme }) => theme.space[3]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  box-shadow: ${({ theme }) => theme.shadows[0]};

  & > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: ${({ theme }) => theme.space[4]}px;
  color: black;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
