import React from 'react';
import clsx from 'clsx';
import styles from './ButtonItem.module.scss';

type Variant = 'text' | 'outlined' | 'contained';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
}

const ButtonItem = ({
  label,
  onClick,
  disabled = false,
  variant = 'contained',
  size = 'medium',
  icon,
  className,
  ...props
}: ButtonProps) => {
  const { button, disabledColor, buttonIcon } = styles;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        button,
        styles[variant],
        styles[size],
        disabled && disabledColor,
        className
      )}
      {...props}
    >
      {icon && <span className={buttonIcon}>{icon}</span>}
      {label}
    </button>
  );
};

export default ButtonItem;
