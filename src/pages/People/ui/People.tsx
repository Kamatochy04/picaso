import { useNavigate } from 'react-router-dom';

import { Input } from '@/shared/component';
import { Block, UserItem } from '@/widgets';

import user from '@shared/icons/User.svg';

import styles from './people.module.scss';

export const People = () => {
  const navigate = useNavigate();
  return (
    <div className={'container show-anim'}>
      <Block className={styles.container}>
        <Input />
        <div className={styles.add__button}>
          <div className={styles.sercle}>
            <img src={user} alt="add user" />
          </div>
          <p className={styles.text}>пригласить кого-нибудь</p>
        </div>
        <div className={styles.people}>
          <UserItem
            userName={'Александр А.'}
            lastTime={'в сети'}
            onClick={() => navigate('/chat')}
          />
          <UserItem
            userName={'Александра А.'}
            lastTime={'были 10 дек 2024 в 12:00'}
            onClick={() => navigate('/chat')}
          />
          <UserItem
            userName={'Богдан Б.'}
            lastTime={'были 10 дек 2024 в 14:00'}
            onClick={() => navigate('/chat')}
          />
          <UserItem
            userName={'Богдана Б.'}
            lastTime={'были 10 дек 2024 в 16:00'}
            onClick={() => navigate('/chat')}
          />
          <UserItem
            userName={'Валентин В.'}
            lastTime={'были 10 дек 2024 в 18:00'}
            onClick={() => navigate('/chat')}
          />
          <UserItem
            userName={'Валентина В.'}
            lastTime={'были 10 дек 2024 в 20:00'}
            onClick={() => navigate('/chat')}
          />
        </div>
      </Block>
    </div>
  );
};
