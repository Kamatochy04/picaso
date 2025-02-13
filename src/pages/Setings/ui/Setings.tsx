import { useNavigate } from 'react-router-dom';

import styles from './setings.module.scss';

import person from '@shared/img/Preview.png';
import exportIcon from '@shared/icons/Export.svg';
import { Block, ListItem } from '@/widgets';

export const Setings = () => {
  const navigate = useNavigate();

  return (
    <div className={` show-anim`}>
      <div className={`${styles.setings} container`}>
        <div className={styles.header}>
          <img src={person} alt="thubnail" />
          <div className={styles.inf}>
            <p className={styles.name}>Иван И.</p>
            <p className={styles.number}>+968 12345678</p>
            <p className={styles.text}>Персональная страница</p>
          </div>
          <div className={styles.back}>
            <img src={exportIcon} alt="export" />
            <p className={styles.number}>1</p>
          </div>
        </div>
        <Block>
          <ListItem text={'Мои файлы'} isBorder isBlocked />
          <ListItem text={'Мои документы'} />
        </Block>
        <Block>
          <ListItem text={'Русский язык'} onClick={() => navigate('language')} />
        </Block>
        <Block>
          <ListItem text={'Настройки сервиса'} isBlocked isBorder />
          <ListItem text={'Настройки чата'} isBlocked />
        </Block>
      </div>
    </div>
  );
};
