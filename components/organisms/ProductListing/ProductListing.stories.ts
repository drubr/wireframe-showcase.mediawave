import type { Meta, StoryObj } from '@storybook/react';

import ProductListing from './ProductListing';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductListing> = {
  title: 'Organisms/Product Listing',
  component: ProductListing,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProductListing>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};