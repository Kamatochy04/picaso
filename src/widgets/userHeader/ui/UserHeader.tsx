import arrow from '@shared/icons/CaretRight.svg';
import user from '@shared/img/Preview.png';

import styles from './userHeader.module.scss';
import { useNavigate } from 'react-router-dom';

export const UserHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className="container">
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
    </div>
  );
};
