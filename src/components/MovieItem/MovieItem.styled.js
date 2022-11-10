import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: ${({ theme }) => theme.space[3]}px;
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.space[4]}px;
  text-decoration: none;
`;

export const Poster = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: italic;
  color: black;

  > p {
    margin: ${({ theme }) => theme.space[3]}px 0;
  }
`;
