import type { Meta, StoryObj } from '@storybook/react';

import DsButton from '../src/components/DsButton';

const meta: Meta<typeof DsButton> = {
  component: DsButton,
  title: 'Components/Dsbutton',
};

export default meta;
type Story = StoryObj<typeof DsButton>;

export const PrimaryButton: Story = {
  args: {
   children: 'Click Me!'
  },
};
