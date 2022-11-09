import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: 15px;
  display: grid;
  grid-gap: 20px;
  list-style: none;
`;

export const ReviewItem = styled.div`
  padding: 10px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
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
