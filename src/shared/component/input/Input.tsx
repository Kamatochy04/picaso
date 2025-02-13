import { ComponentProps, FC } from 'react';
import styles from './input.module.scss';
import { SearchIcon } from '@/shared/icons/SearchIcon';

type InputProps = ComponentProps<'input'> & {
  className?: string;
  label?: string;
  valut?: 'RUB' | 'BYN';
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
