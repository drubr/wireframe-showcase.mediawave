import type { Meta, StoryObj } from '@storybook/react';

import PlaceholderImageTextBlock from './PlaceholderImageTextBlock'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PlaceholderImageTextBlock> = {
  title: 'Organisms/Placeholder Image Text Block',
  component: PlaceholderImageTextBlock,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PlaceholderImageTextBlock>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};