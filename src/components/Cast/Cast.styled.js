import styled from 'styled-components';

export const CastList = styled.ul`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;
`;
