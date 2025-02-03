import { FC } from 'react';
import styles from './block.module.scss';

type BlockPropsType = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const Block: FC<BlockPropsType> = ({ className, children }) => {
  return <div className={`${styles.block} ${className}`}>{children}</div>;
};
