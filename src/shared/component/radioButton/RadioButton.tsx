import { ComponentProps, FC } from 'react';

import styles from './button.module.scss';

type RadioButtonProps = ComponentProps<'input'> & {
  isBlockd?: boolean;
  className?: string;
  label?: string;
  labelClick?: () => void;
};

export const RadioButton: FC<RadioButtonProps> = ({
  labelClick,
  className,
  label,
  isBlockd,
  ...props
}) => {
  const onLabelClick = () => {
    if (labelClick) {
      labelClick();
    }
  };

  return (
    <label data-block={isBlockd} className={`${styles.container} ${className}`}>
      <input type="checkbox" {...props} />
      <span className={styles.radio__button}></span>
      <label className={styles.label__text} onClick={onLabelClick}>
        {label}
      </label>
    </label>
  );
};
