import arrow from '@shared/icons/CaretRight.svg';
import user from '@shared/img/Preview.png';

import styles from './userHeader.module.scss';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

type HeaderProps = {
  className?: string;
};

export const UserHeader: FC<HeaderProps> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.header} ${className}`}>
      <div className={styles.header__container}>
        <img
          src={arrow}
          alt="arrow"
          className={styles.user__arrow}
          onClick={() => navigate(-1)}
        />
        <div className={styles.user}>
          <img src={user} alt="user" />
          <div className={styles.inf}>
            <h3 className={styles.title}>Ян Я.</h3>
            <p className={styles.text}>в сети </p>
          </div>
        </div>
      </div>
    </div>
  );
};
