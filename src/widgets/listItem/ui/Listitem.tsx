import React, { FC, useEffect, useState } from 'react';
import arrowImg from '@shared/icons/CaretRight.svg';

import styles from './listItem.module.scss';

type ListItemProps = {
  isBorder?: boolean;
  text: string;
  number?: number;
  onClick?: () => void;
  isArrow?: boolean;
  className?: string;
  isBlocked?: boolean;
};

export const ListItem: FC<ListItemProps> = ({
  isArrow = true,
  number,
  isBorder,
  text,
  isBlocked,
  className,
  onClick,
}) => {
  const [arrow, setArrow] = useState<React.ReactNode>('');
  const handelClick = () => {
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    if (isArrow) {
      if (number) {
        setArrow(number);
      } else {
        setArrow(<img src={arrowImg} alt="arrow" />);
      }
    } else {
      setArrow('');
    }
  }, []);

  return (
    <div
      className={`${isBorder ? styles.border : ''} ${isBlocked ? styles.blocked : ''} ${
        styles.block__item
      } ${className}`}
      onClick={() => handelClick()}
    >
      <div className={styles.block__mark}></div>
      <p className={styles.block__text}>{text}</p>

      {arrow}
    </div>
  );
};
