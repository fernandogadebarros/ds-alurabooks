import type { Meta, StoryObj } from '@storybook/react';

import { Thing, Props } from '../src';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Thing> = {
  component: Thing,
};

export default meta;
type Story = StoryObj<typeof Thing>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
