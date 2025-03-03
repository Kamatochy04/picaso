import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/component';

import styles from './preview.module.scss';

export const PreviewScreen = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.preview}>
      <div className={'container '}>
        <div className={styles.box}>
          <div className={styles.preview__container}>
            <Button
              variant="main"
              className={styles.button}
              onClick={() => navigate('/register')}
            >
              English
            </Button>
            <Button
              variant="main"
              className={`${styles.button_2} ${styles.button}`}
              onClick={() => navigate('/register')}
            >
              Русский
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
