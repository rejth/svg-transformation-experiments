export type Basic = {
  primary: string;
  secondary: string;
  hover: string;
  disable: string;
};

export type Background = {
  primary: string;
  secondary: string;
  secondaryHover: string;
  secondaryDisable: string;
};

export type Text = {
  primary: string;
  secondary: string;
  disable: string;
};

export type Color = {
  basic: Basic;
  background: Background;
  text: Text;
};

export interface Theme {
  color: Color;
  name: 'light';
}
