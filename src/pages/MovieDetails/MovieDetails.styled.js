import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  padding: 0 20px;
`;

export const Controls = styled.div`
  padding: 5px 0;

  > a {
    padding: 8px 15px;
    width: 80px;
    font-weight: 500;
    color: black;
    text-decoration: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0,
      rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
    display: flex;
    align-items: end;
    gap: 5px;
  }
`;

export const Description = styled.div`
  padding: 10px 0;
  display: flex;
  flex-wrap: nowrap;
  gap: 30px;
  text-decoration: none;
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-style: normal;
`;

export const Overview = styled.div`
  font-size: 16px;
  color: black;

  > p {
    margin: 15px 0 40px;
  }
`;

export const Tabs = styled.div`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 10px 0;
  color: black;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  width: 80px;
  border: 1px solid #eae9e9;

  &.active {
    box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0,
      rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  }
`;
