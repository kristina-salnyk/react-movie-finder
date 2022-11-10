import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[5]}px;
`;

export const Text = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 24px;
`;

export const Image = styled.img`
  max-width: 200px;
`;
