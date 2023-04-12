import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCard> = {
  title: 'Molecules/Product Card',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};