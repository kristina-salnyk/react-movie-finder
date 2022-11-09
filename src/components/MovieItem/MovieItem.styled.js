import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  text-decoration: none;
`;

export const Poster = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-style: normal;
`;

export const Description = styled.div`
  font-size: 12px;
  font-style: italic;
  color: black;

  > p {
    margin: 10px 0;
  }
`;
