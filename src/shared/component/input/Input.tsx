import { ComponentProps, FC } from 'react';

import { SearchIcon } from '@/shared/icons/SearchIcon';

import styles from './input.module.scss';

type InputProps = ComponentProps<'input'> & {
  className?: string;
  label?: string;
  valut?: string;
  isSearch?: boolean;
  rightIcon?: React.ReactNode;
};

export const Input: FC<InputProps> = ({
  isSearch = false,
  className,
  label,
  valut,
  rightIcon,
  ...props
}) => {
  return (
    <label className={`${styles.container} ${className}`}>
      <p className={styles.label}>{label}</p>
      {isSearch ? (
        <div className={styles.serch__icon}>
          <SearchIcon />
        </div>
      ) : null}

      <input {...props} className={styles.input} />
      <div className={styles.right__icon}>{rightIcon}</div>
      <p className={styles.valut}>{valut}</p>
    </label>
  );
};
