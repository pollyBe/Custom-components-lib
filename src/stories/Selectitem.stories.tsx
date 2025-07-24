import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SelectItem from '../components/Select/SelectItem';

const meta: Meta<typeof SelectItem> = {
  title: 'Components/SelectItem',
  component: SelectItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SelectItem>;

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' },
];

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('option-1');
    return (
      <SelectItem
        {...args}
        options={options}
        value={value}
        onChange={val => setValue(val)}
      />
    );
  },
  args: {
    label: 'Choose option',
    disabled: false,
  },
};

export const Disabled: Story = {
  render: args => {
    const [value, setValue] = useState('option-2');
    return (
      <SelectItem
        {...args}
        options={options}
        value={value}
        onChange={val => setValue(val)}
      />
    );
  },
  args: {
    label: 'Disabled select',
    disabled: true,
  },
};
