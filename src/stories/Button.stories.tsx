import styled from 'styled-components';
import type { Meta } from '@storybook/react';

import { ReactComponent as Bookmark } from '../assets/images/bookmark.svg';
import { ReactComponent as Arrow } from '../assets/images/arrow.svg';
import { filterKeysWithUndefinedValues } from '../shared';
import { Button } from '../ui';

const ButtonContainer = styled.div`
  padding: 24px;
  position: relative;
  display: block;

  > * {
    margin: 8px 16px 0 0;
  }
`;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    appearance: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

const ButtonPlaygroundDemo = ({ ...args }) => {
  const props = filterKeysWithUndefinedValues(args);

  const primaryCustomStyles =
    (!props.appearance || props.appearance === 'primary') && !props?.disabled
      ? {
          boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
        }
      : {};
  const secondaryCustomStyles =
    props.appearance === 'secondary' && !props?.disabled
      ? {
          textShadow: `0 2px 2px rgba(0, 0, 0, 0.25)`,
        }
      : {};

  return (
    <>
      <ButtonContainer>
        <Button {...props} style={secondaryCustomStyles}>
          Button
        </Button>
        <Button {...props} style={primaryCustomStyles}>
          <Bookmark />
          Button
        </Button>
        <Button {...props}>
          Button
          <Arrow />
        </Button>
      </ButtonContainer>
    </>
  );
};

export const Playground = ButtonPlaygroundDemo.bind({});
