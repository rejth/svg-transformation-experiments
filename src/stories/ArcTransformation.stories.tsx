import type { Meta, StoryObj } from '@storybook/react';
import { ArcTransformation } from '../ui';

type Story = StoryObj<typeof ArcTransformation>;

export default {
  title: 'Example/ArcTransformation',
  component: ArcTransformation,
} satisfies Meta<typeof ArcTransformation>;

export const Demo: Story = {};
