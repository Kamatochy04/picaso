import { Input } from '@/shared/component';

import styles from './screan.module.scss';
import preview from '@shared/img/Preview.png';
import country from '@/shared/img/country/img_1.png';

export const FirstScrean = () => {
  return (
    <div className={styles.content}>
      <div className={`container ${styles.height}`}>
        <div className={styles.content__container}>
          <div className={styles.content__button}></div>

          <img src={preview} alt="preview" />
          <p className={styles.content__text}>
            Пригласить с кем хотите заключить документ, либо поговорить о погоде
          </p>
          <div className={styles.phone__container}>
            <div className={styles.phone__sercle}>
              <img src={country} alt="" />
            </div>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};
