import styles from './SelectItem.module.scss';
import clsx from 'clsx';

interface OptionProps {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options: OptionProps[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

const SelectItem = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  className,
}: SelectProps) => {
  const { wrapper, select, labelStyle } = styles;
  return (
    <div className={clsx(wrapper, className)}>
      {label && <label className={labelStyle}>{label}</label>}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        className={select}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectItem;
