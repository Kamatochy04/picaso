import { Button, Logo } from '@/shared/component';
import { useNavigate } from 'react-router-dom';

import styles from './preview.module.scss';

export const PreviewScreen = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.preview}>
      <div className={`container `}>
        <div className={styles.box}>
          <div className={styles.preview__container}>
            <Logo size="XL" />
            <h3 className={styles.sub_title}>новый документооборот</h3>

            <Button
              variant="main"
              className={styles.button}
              onClick={() => navigate('./register')}
            >
              Начать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
