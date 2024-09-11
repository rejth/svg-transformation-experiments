import type { Background, Basic, Color, Text } from '../types';

const BASIC: Basic = {
  primary: '#BA985D',
  secondary: '#FFFFFF',
  hover: '#D4B57F',
  disable: '#E2E2E2',
} as const;

const BACKGROUND: Background = {
  primary: '#BA985D',
  secondary: '#FFFFFF',
  secondaryHover: '#FFFBF5',
  secondaryDisable: '#EFEFEF',
} as const;

const TEXT: Text = {
  primary: '#FFFFFF',
  secondary: '#BA985D',
  disable: '#979797',
} as const;

export const COLOR: Color = {
  basic: BASIC,
  background: BACKGROUND,
  text: TEXT,
} as const;
