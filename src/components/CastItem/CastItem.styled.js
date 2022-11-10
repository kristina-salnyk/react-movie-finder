import styled from 'styled-components';

export const Item = styled.div`
  padding: ${({ theme }) => theme.space[4]}px;
  display: flex;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.space[4]}px;
  box-shadow: ${({ theme }) => theme.shadows[2]};
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Profile = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-style: normal;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-style: italic;
  color: black;
`;
