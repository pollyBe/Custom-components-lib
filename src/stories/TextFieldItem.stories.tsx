import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextFieldItem from '../components/TextField/TextFieldItem';

const meta: Meta<typeof TextFieldItem> = {
  title: 'Components/TextFieldItem',
  component: TextFieldItem,
  tags: ['autodocs'],
  args: {
    label: 'Outlined',
    placeholder: 'Type something...',
  },
};

export default meta;
type Story = StoryObj<typeof TextFieldItem>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('');
    return (
      <TextFieldItem
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    );
  },
};

export const WithError: Story = {
  render: args => {
    const [value, setValue] = useState('');
    return (
      <TextFieldItem
        {...args}
        value={value}
        onChange={e => setValue(e.target.value)}
        error
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled field',
  },
};
