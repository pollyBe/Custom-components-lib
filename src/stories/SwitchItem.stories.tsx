import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SwitchItem from '../components/Switch/SwitchItem';

const meta: Meta<typeof SwitchItem> = {
  title: 'Components/SwitchItem',
  component: SwitchItem,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: false },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchItem>;

export const Default: Story = {
  render: args => {
    const [checked, setChecked] = useState(true);
    return (
      <SwitchItem
        {...args}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  render: args => <SwitchItem {...args} checked={false} onChange={() => {}} />,
  args: {
    disabled: true,
  },
};
