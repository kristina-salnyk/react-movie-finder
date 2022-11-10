import styled from 'styled-components';

export const CastList = styled.ul`
  padding: ${({ theme }) => theme.space[4]}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: ${({ theme }) => theme.space[4]}px;
  list-style: none;
`;
