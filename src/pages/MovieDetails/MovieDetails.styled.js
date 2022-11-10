import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Controls = styled.div`
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;

  > a {
    padding: ${({ theme }) => theme.space[3]}px
      ${({ theme }) => theme.space[4]}px;
    width: 80px;

    font-weight: 500;
    text-decoration: none;

    color: ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.shadows[1]};

    display: flex;
    align-items: end;
    gap: ${({ theme }) => theme.space[2]}px;
  }
`;

export const Details = styled.div`
  padding: ${({ theme }) => theme.space[4]}px;
`;

export const MovieCard = styled.div`
  padding: ${({ theme }) => theme.space[4]}px;
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.space[5]}px;
  text-decoration: none;
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Title = styled.h1`
  margin-top: ${({ theme }) => theme.space[3]}px;
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-style: normal;
`;

export const Overview = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: black;

  > p {
    margin: ${({ theme }) => theme.space[4]}px 0
      ${({ theme }) => theme.space[5]}px;
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 10px 0;
  width: 80px;

  font-weight: 500;
  text-decoration: none;
  text-align: center;

  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &.active {
    box-shadow: ${({ theme }) => theme.shadows[1]};
  }
`;
