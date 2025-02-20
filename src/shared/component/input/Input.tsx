import { ComponentProps, FC } from 'react';

import { SearchIcon } from '@/shared/icons/SearchIcon';

import styles from './input.module.scss';

type InputProps = ComponentProps<'input'> & {
  className?: string;
  label?: string;
  valut?: string;
  isSearch?: boolean;
};

export const Input: FC<InputProps> = ({
  isSearch = false,
  className,
  label,
  valut,
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
      <p className={styles.valut}>{valut}</p>
    </label>
  );
};
