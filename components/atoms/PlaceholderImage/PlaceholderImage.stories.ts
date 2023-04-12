import type { Meta, StoryObj } from '@storybook/react';

import PlaceholderImage from './PlaceholderImage'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PlaceholderImage> = {
  title: 'Atoms/Placeholder Image',
  component: PlaceholderImage,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PlaceholderImage>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {};