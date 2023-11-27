import type { Meta, StoryObj } from '@storybook/react';

import DsOptionsGroup from '../src/components/DsOptionsGroup';

const meta: Meta<typeof DsOptionsGroup> = {
  component: DsOptionsGroup,
  title: 'Components/DSOptionsGroup',
  argTypes: {
    onChange: { action: 'Changed'}
  }
};

export default meta;
type Story = StoryObj<typeof DsOptionsGroup>;

export const OptionsPrimary: Story = {
  args: {
    options: [
      {
        id: 1,
        title:'E-book',
        body: 'R$ 00,00',
        footer: '.pdf, .epub, .mob'
      },
      {
        id: 2,
        title:'Impresso',
        body: 'R$ 00,00',
        footer: '.pdf, .epub, .mob'
      }
    ]
  },
};
