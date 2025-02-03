import { cva, type VariantProps } from 'class-variance-authority';

import styles from './button.module.scss';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva('button', {
  variants: {
    variant: {
      main: styles.button,
    },
  },
});
