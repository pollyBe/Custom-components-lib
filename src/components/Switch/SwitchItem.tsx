import React from 'react';
import clsx from 'clsx';
import styles from './SwitchItem.module.scss';

interface SwitchItemProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const SwitchItem = ({
  checked,
  onChange,
  disabled = false,
  className,
}: SwitchItemProps) => {
  return (
    <label className={clsx(styles.switch, className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.input}
      />
      <span className={clsx(styles.slider, disabled && styles.disabled)} />
    </label>
  );
};

export default SwitchItem;
