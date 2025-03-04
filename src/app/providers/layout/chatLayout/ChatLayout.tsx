import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '@/shared/component';
import { ClipIcon } from '@/shared/icons/ClipIcon';
import { ClouseIcon } from '@/shared/icons/ClouseIcon';
import {
  Block,
  ConfirDoc,
  DocumentMessage,
  ListItem,
  Message,
  Modal,
  UserHeader,
} from '@/widgets';

import ArrowLineUp from '@shared/icons/ArrowLineUp.svg';

import styles from './chat.module.scss';

export const Chatlayout = () => {
  const [showSetings, setShowSetings] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive ? (
        <Modal>
          <div className={styles.btn__wrapper}>
            <div className={styles.clouse_icon} onClick={() => setIsActive(false)}>
              <ClouseIcon />
            </div>
            <ConfirDoc setIsOpen={() => setIsActive(false)} />
          </div>
        </Modal>
      ) : null}

      <div className={styles.chat}>
        <div className={styles.header}>
          <div className="container">
            <UserHeader className={styles.chat__header} />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={`container ${styles.height}`}>
            <Block className={styles.content}>
              <Message sender={'you'} text={'Привет'} />
              <Message sender={'he'} text={'Доброе утро!'} />
              <Message sender={'you'} text={'Вы продаете автомобиль?'} />
              <Message sender={'he'} text={'Я не понимаю о чём вы'} />

              <DocumentMessage userName="Иван И. " onClick={() => setIsActive(true)} />
            </Block>
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
                  <ListItem text={'Пригласить специалиста'} isBlocked />
                  <ListItem
                    className="show"
                    text={'Разработать документ'}
                    onClick={() => navigate('/add-document')}
                  />
                  <ListItem text={'Добавить документ'} isBlocked />
                </div>
              ) : null}
            </Block>
          </div>
        </div>
      </div>
    </>
  );
};
