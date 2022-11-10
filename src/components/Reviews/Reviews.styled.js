import styled from 'styled-components';

export const ReviewsList = styled.ul`
  padding: ${({ theme }) => theme.space[4]}px;
  display: grid;
  grid-gap: ${({ theme }) => theme.space[4]}px;
  list-style: none;
`;

export const ReviewItem = styled.div`
  padding: ${({ theme }) => theme.space[2]}px ${({ theme }) => theme.space[4]}px
    ${({ theme }) => theme.space[4]}px;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
`;
