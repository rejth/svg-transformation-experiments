import { forwardRef, Children } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import type { Appearance, StyledButtonProps } from './types';
import { appearanceMixin } from './mixins';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: Appearance;
}

const ButtonContent = styled.div`
  vertical-align: top;

  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }

  & > svg {
    width: 12px;
    height: 12px;
  }

  div + svg {
    width: 9px;
    height: 9px;
  }
`;

const StyledButton = styled.button.attrs<StyledButtonProps & { 'data-appearance'?: string }>(
  (props) => ({
    'data-appearance': props.appearance,
  }),
)<StyledButtonProps>`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: 5px;
  appearance: none;
  vertical-align: center;
  padding: 8px 14px;

  ${appearanceMixin};

  &:hover {
    cursor: pointer;
  }

  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ appearance = 'primary', type = 'button', children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} type={type} appearance={appearance} {...props}>
        <ButtonContent>
          {Children.toArray(children).map((child, index) =>
            typeof child === 'string' ? <div key={child + index}>{child}</div> : child,
          )}
        </ButtonContent>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
