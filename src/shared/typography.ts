import { css } from 'styled-components';

const FONT_FAMILY = `'Inter', sans-serif`;

export const typography = {
  ButtonTypography: css`
    font-family: ${FONT_FAMILY};
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: ${(p) => p.theme.color.text.primary};
  `,
};
