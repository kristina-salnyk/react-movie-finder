import styled from 'styled-components';

export const Description = styled.div`
  padding: 10px;
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
    margin: 30px 0;
  }
`;
