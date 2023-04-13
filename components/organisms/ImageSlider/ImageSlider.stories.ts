import type { Meta, StoryObj } from '@storybook/react';

import ImageSlider from './ImageSlider';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ImageSlider> = {
  title: 'Organisms/Image Slider',
  component: ImageSlider,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageSlider>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};