import { cva, type VariantProps } from 'class-variance-authority';

import styles from './logo.module.scss';

export type LogoVariants = VariantProps<typeof logoVarinat>;

export const logoVarinat = cva(styles.logo, {
  variants: {
    size: {
      S: styles.S,
      L: styles.L,
      XL: styles.XL,
      XXL: styles.XXL,
    },
  },
});
