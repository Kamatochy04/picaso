import { ComponentProps, FC } from 'react';
import styles from './input.module.scss';

type InputProps = ComponentProps<'input'> & {
  className?: string;
  label?: string;
  valut?: 'RUB' | 'BYN';
};

export const Input: FC<InputProps> = ({ className, label, valut, ...props }) => {
  return (
    <label className={`${styles.container} ${className}`}>
      <p className={styles.label}>{label}</p>
      <input {...props} className={styles.input} />
      <p className={styles.valut}>{valut}</p>
    </label>
  );
};
