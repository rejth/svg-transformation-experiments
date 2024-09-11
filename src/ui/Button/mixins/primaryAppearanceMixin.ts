import { css } from 'styled-components';

export const primaryAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color.basic.primary};
  color: ${({ theme }) => theme.color.text.primary};
  border: 1px solid ${({ theme }) => theme.color.basic.primary};

  & path[fill] {
    fill: ${({ theme }) => theme.color.text.primary};
  }
  & path[stroke] {
    stroke: ${({ theme }) => theme.color.text.primary};
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.basic.hover};
    border-color: ${({ theme }) => theme.color.basic.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.basic.primary};
    border-color: ${({ theme }) => theme.color.basic.primary};
  }

  &[data-appearance~='disabled'],
  &:disabled {
    background-color: ${({ theme }) => theme.color.basic.disable};
    color: ${({ theme }) => theme.color.text.disable};
    border-color: ${({ theme }) => theme.color.basic.disable};
    box-shadow: none;

    & path[fill] {
      fill: ${({ theme }) => theme.color.text.disable};
    }
    & path[stroke] {
      stroke: ${({ theme }) => theme.color.text.disable};
    }
  }
`;
