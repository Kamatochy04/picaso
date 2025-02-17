import { Block, DocumentMessage, ListItem, Message, UserHeader } from '@/widgets';
import { Input } from '@/shared/component';

import styles from './chat.module.scss';

import ArrowLineUp from '@shared/icons/ArrowLineUp.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipIcon } from '@/shared/icons/ClipIcon';

export const Chatlayout = () => {
  const [showSetings, setShowSetings] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <div className="container">
          <UserHeader className={styles.chat__header} />
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={`container ${styles.height}`}>
          <div className={styles.content}>
            <Message sender={'you'} text={'Привет'} />
            <Message sender={'he'} text={'Доброе утро!'} />
            <Message sender={'you'} text={'Вы продаете автомобиль?'} />
            <Message sender={'he'} text={'Я не понимаю о чём вы'} />

            <DocumentMessage userName="Иван И. " />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <Block>
            <div className={`${message ? styles.block_active : ''} ${styles.block}`}>
              <Input
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
              {message ? null : (
                <div
                  className={`${showSetings ? styles.active : ''} ${styles.sercle}`}
                  onClick={() => setShowSetings((prev) => !prev)}
                >
                  <ClipIcon />
                </div>
              )}

              <div className={styles.sercle}>
                <img src={ArrowLineUp} alt="ArrowLineUp" />
              </div>
            </div>
            {showSetings ? (
              <div className={`${styles.list} `}>
                <ListItem
                  className="show"
                  text={'Добавить документ'}
                  onClick={() => navigate('/add-document')}
                />
                <ListItem text={'Разработать документ'} isBlocked />
              </div>
            ) : null}
          </Block>
        </div>
      </div>
    </div>
  );
};
