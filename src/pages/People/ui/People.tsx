import { useNavigate } from 'react-router-dom';
import { Input } from '@/shared/component';
import { Block, UserItem } from '@/widgets';

import styles from './people.module.scss';

import user from '@shared/icons/User.svg';

export const People = () => {
  const navigate = useNavigate();
  return (
    <div className={`container show-anim ${styles.container}`}>
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
            userName={'Александр А.'}
            lastTime={'в сети'}
            onClick={() => navigate('/chat')}
          />
          <UserItem
            userName={'Александр А.'}
            lastTime={'в сети'}
            onClick={() => navigate('/chat')}
          />
          <UserItem
            userName={'Александр А.'}
            lastTime={'в сети'}
            onClick={() => navigate('/chat')}
          />
        </div>
      </Block>
    </div>
  );
};
