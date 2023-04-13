import type { Meta, StoryObj } from '@storybook/react';

import ProductCarousel from './ProductCarousel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCarousel> = {
  title: 'Organisms/Product Carousel',
  component: ProductCarousel,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProductCarousel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};