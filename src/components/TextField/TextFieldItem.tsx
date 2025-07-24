import React from 'react';
import clsx from 'clsx';
import styles from './TextFieldItem.module.scss';

interface TextFieldItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

const TextFieldItem = React.forwardRef<HTMLInputElement, TextFieldItemProps>(
  ({ label, error = false, className, ...props }, ref) => {
    return (
      <div className={clsx(styles.container, error && styles.error, className)}>
        {label && <label className={styles.label}>{label}</label>}
        <input ref={ref} className={styles.input} {...props} />
      </div>
    );
  }
);

export default TextFieldItem;
