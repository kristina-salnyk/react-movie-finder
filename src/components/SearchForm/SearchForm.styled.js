import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid lightgrey;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
`;
