import { FC } from 'react';

import styles from './user.module.scss';

import arrow from '@shared/icons/CaretRight.svg';
import user from '@shared/img/Preview.png';

type UserItemProps = {
  userName: string;
  lastTime: string;
  className?: string;
  onClick: () => void;
};

export const UserItem: FC<UserItemProps> = ({
  userName,
  lastTime,
  className,
  onClick,
}) => {
  return (
    <div className={`${styles.user} ${className}`} onClick={onClick}>
      <img src={user} alt="user" />
      <div className={styles.inf}>
        <h3 className={styles.name}>{userName}</h3>
        <p className={styles.last_time}>{lastTime}</p>
      </div>
      <img src={arrow} alt="arrow" />
    </div>
  );
};
