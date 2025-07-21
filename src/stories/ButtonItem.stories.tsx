import type { Meta, StoryObj } from '@storybook/react';
import ButtonItem from '../components/Button/ButtonItem';
import { FaPlus } from 'react-icons/fa';

const meta: Meta<typeof ButtonItem> = {
  title: 'Components/ButtonItem',
  component: ButtonItem,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'outlined', 'contained'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonItem>;

export const Contained: Story = {
  args: {
    label: 'Contained',
    variant: 'contained',
    size: 'medium',
    onClick: () => alert('Clicked Contained'),
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined',
    variant: 'outlined',
    size: 'medium',
    onClick: () => alert('Clicked Outlined'),
  },
};

export const Text: Story = {
  args: {
    label: 'Text',
    variant: 'text',
    size: 'medium',
    onClick: () => alert('Clicked Text'),
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Add',
    variant: 'contained',
    size: 'medium',
    icon: <FaPlus />,
    onClick: () => alert('Clicked with icon'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    variant: 'contained',
    disabled: true,
    size: 'medium',
    onClick: () => alert('Will not fire'),
  },
};
