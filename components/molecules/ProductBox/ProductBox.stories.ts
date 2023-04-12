import type { Meta, StoryObj } from '@storybook/react';

import ProductBox from './ProductBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductBox> = {
  title: 'Molecules/Product Box',
  component: ProductBox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProductBox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};