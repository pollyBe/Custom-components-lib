import type { Meta, StoryObj } from '@storybook/react';
import CheckboxItem from '../components/Checkbox/CheckboxItem';
import { useState } from 'react';

const meta: Meta<typeof CheckboxItem> = {
  title: 'Components/CheckboxItem',
  component: CheckboxItem,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxItem>;

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    checked: false,
    disabled: true,
  },
};

export const WithState: Story = {
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return (
      <CheckboxItem
        {...args}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
    );
  },
  args: {
    label: 'Click me',
    checked: true,
  },
};
