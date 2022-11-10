import styled from 'styled-components';

export const List = styled.ul`
  padding: ${({ theme }) => theme.space[4]}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: ${({ theme }) => theme.space[4]}px;
  list-style: none;
`;

export const ListItem = styled.li`
  box-shadow: ${({ theme }) => theme.shadows[2]};
  border-radius: ${({ theme }) => theme.radii.normal};
`;
