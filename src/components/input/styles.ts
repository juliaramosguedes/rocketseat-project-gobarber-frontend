import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #ff9000;

      svg {
        stroke: #ff9000;
      }
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      svg {
        stroke: #ff9000;
      }
    `}

  label {
    display: flex;
    align-items: flex-end;
  }

  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    color: #666360;
    margin-right: 16px;
  }
`;
