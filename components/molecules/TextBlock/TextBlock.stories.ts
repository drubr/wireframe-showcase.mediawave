import type { Meta, StoryObj } from '@storybook/react';

import TextBlock from './TextBlock';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextBlock> = {
  title: 'Molecules/TextBlock',
  component: TextBlock,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextBlock>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'TextBlock',
  },
};
