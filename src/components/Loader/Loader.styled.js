import styled from 'styled-components';

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.overlay};
  min-height: 400px;
`;
