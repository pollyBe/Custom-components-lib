import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import ModalItem from '../components/Modal/ModalItem';

const meta: Meta<typeof ModalItem> = {
  title: 'Components/ModalItem',
  component: ModalItem,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: false },
    onClose: { action: 'onClose' },
    closeOnBackdropClick: { control: 'boolean' },
    closeOnEsc: { control: 'boolean' },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ModalItem>;

export const Default: Story = {
  render: args => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <ModalItem
          {...args}
          isOpen={open}
          onClose={() => {
            args.onClose?.();
            setOpen(false);
          }}
        >
          <h2>Modal title</h2>
          <p>This is modal content</p>
          <button onClick={() => setOpen(false)}>Close</button>
        </ModalItem>
      </>
    );
  },
  args: {
    closeOnBackdropClick: true,
    closeOnEsc: true,
  },
};
