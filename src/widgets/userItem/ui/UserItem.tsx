import { FC } from 'react';

import arrow from '@shared/icons/CaretRight.svg';

import styles from './user.module.scss';

type UserItemProps = {
  userName: string;
  lastTime: string;
  className?: string;
  userImg: string;
  onClick: () => void;
};

export const UserItem: FC<UserItemProps> = ({
  userName,
  lastTime,
  className,
  userImg,
  onClick,
}) => {
  return (
    <div className={`${styles.user} ${className}`} onClick={onClick}>
      <img src={userImg} alt="user" />
      <div className={styles.inf}>
        <h3 className={styles.name}>{userName}</h3>
        <p className={styles.last_time}>{lastTime}</p>
      </div>
      <img src={arrow} alt="arrow" />
    </div>
  );
};
