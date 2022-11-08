import styled from 'styled-components';

export const Container = styled.ul`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
  border-radius: 4px;
`;
