import { css } from 'styled-components';

export const secondaryAppearanceMixin = css`
  background-color: transparent;
  color: ${({ theme }) => theme.color.text.secondary};
  border: 1px solid ${({ theme }) => theme.color.basic.primary};

  & path[fill] {
    fill: ${({ theme }) => theme.color.text.secondary};
  }
  & path[stroke] {
    stroke: ${({ theme }) => theme.color.text.secondary};
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.background.secondaryHover};
    color: ${({ theme }) => theme.color.text.secondary};
    border-color: ${({ theme }) => theme.color.basic.primary};

    & path[fill] {
      fill: ${({ theme }) => theme.color.text.secondary};
    }
    & path[stroke] {
      stroke: ${({ theme }) => theme.color.text.secondary};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.background.secondaryHover};
    color: ${({ theme }) => theme.color.text.secondary};
    border-color: ${({ theme }) => theme.color.basic.primary};
  }

  &[data-appearance~='disabled'],
  &:disabled {
    background-color: ${({ theme }) => theme.color.background.secondaryDisable};
    color: ${({ theme }) => theme.color.text.disable};
    border-color: ${({ theme }) => theme.color.text.disable};
    box-shadow: none;

    & path[fill] {
      fill: ${({ theme }) => theme.color.text.disable};
    }
    & path[stroke] {
      stroke: ${({ theme }) => theme.color.text.disable};
    }
  }
`;
