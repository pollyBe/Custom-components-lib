import React from 'react';
import styles from './CheckboxItem.module.scss';
import clsx from 'clsx';

type CheckboxProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const CheckboxItem = ({
  label,
  checked,
  disabled = false,
  onChange,
  className,
}: CheckboxProps) => {
  const {
    wrapper,
    disabledState,
    checkbox,
    checkedState,
    checkmark,
    input,
    text,
  } = styles;
  return (
    <label className={clsx(wrapper, disabled && disabledState, className)}>
      <span className={clsx(checkbox, checked && checkedState)}>
        {checked && <span className={checkmark}>✔</span>}
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className={input}
        />
      </span>
      <span className={text}>{label}</span>
    </label>
  );
};

export default CheckboxItem;
