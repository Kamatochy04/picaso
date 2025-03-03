import { useNavigate } from 'react-router-dom';

import { FormatIcon } from '@/shared/icons/FormIcon';
import { UserAdd } from '@/shared/icons/UserAdd';
import { Block, UserItem } from '@/widgets';

import man from '@shared/img/users/man.svg';
import woman from '@shared/img/users/woman.svg';

import styles from './people.module.scss';

const users = [
  {
    userName: 'Александр А.',
    lastTime: 'в сети',
    userImg: man,
  },
  {
    userName: 'Александр А.',
    lastTime: 'в сети',
    userImg: man,
  },

  {
    userName: 'Даник А.',
    lastTime: 'в сети',
    userImg: woman,
  },

  {
    userName: 'Даник А.',
    lastTime: 'в сети',
    userImg: woman,
  },

  {
    userName: 'Даник А.',
    lastTime: 'в сети',
    userImg: woman,
  },
  {
    userName: 'Андрей К.',
    lastTime: 'в сети',
    userImg: man,
  },
  {
    userName: 'Влад Л.',
    lastTime: 'в сети',
    userImg: man,
  },
  {
    userName: 'Александра А.',
    lastTime: 'были 10 дек 2024 в 16:00',
    userImg: woman,
  },
  {
    userName: 'Ирина К.',
    lastTime: 'были 12 дек 2024 в 11:00',
    userImg: woman,
  },
  {
    userName: 'Дима А.',
    lastTime: 'были 2 дек 2024 в 1:00',
    userImg: man,
  },

  {
    userName: 'Виолета Н.',
    lastTime: 'были 22 дек 2024 в 8:00',
    userImg: woman,
  },
  {
    userName: 'Дима А.',
    lastTime: 'были 2 дек 2024 в 1:00',
    userImg: man,
  },

  {
    userName: 'Виолета Н.',
    lastTime: 'были 22 дек 2024 в 8:00',
    userImg: woman,
  },
  {
    userName: 'Дима А.',
    lastTime: 'были 2 дек 2024 в 1:00',
    userImg: man,
  },

  {
    userName: 'Виолета Н.',
    lastTime: 'были 22 дек 2024 в 8:00',
    userImg: woman,
  },
  {
    userName: 'Андрей К.',
    lastTime: 'в сети',
    userImg: man,
  },
  {
    userName: 'Влад Л.',
    lastTime: 'в сети',
    userImg: man,
  },
  {
    userName: 'Александра А.',
    lastTime: 'были 10 дек 2024 в 16:00',
    userImg: woman,
  },
];

export const People = () => {
  const navigate = useNavigate();
  return (
    <div className={`container show-anim ${styles.relative}`}>
      <Block className={styles.container}>
        <div className={styles.footer__bg}></div>

        <div className={styles.people}>
          <div className={styles.header}>
            <div className={styles.add__button}>
              <div className={styles.sercle}>
                <FormatIcon />
              </div>
              <p className={styles.text}>Формировать</p>
            </div>
            <div className={styles.add__button}>
              <div className={styles.sercle}>
                <UserAdd />
              </div>
              <p className={styles.text}> Пригласить</p>
            </div>
          </div>
          {users.map((item) => (
            <UserItem {...item} onClick={() => navigate('/chat')} />
          ))}
        </div>
      </Block>
    </div>
  );
};
