import { Block, DocumentMessage, ListItem, Message, UserHeader } from '@/widgets';
import { Input } from '@/shared/component';

import styles from './chat.module.scss';

import clip from '@shared/icons/Clip (2).svg';
import ArrowLineUp from '@shared/icons/ArrowLineUp.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Chatlayout = () => {
  const [showSetings, setShowSetings] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={styles.chat}>
      <div className="container">
        <UserHeader />
      </div>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.content}>
          <Message sender={'you'} text={'Привет'} />
          <Message sender={'he'} text={'Доброе утро!'} />
          <Message sender={'you'} text={'Вы продаете автомобиль?'} />
          <Message sender={'he'} text={'Я не понимаю о чём вы'} />
          <Message sender={'he'} text={'Вы писали мне в «Telegram»'} />
          <Message sender={'you'} text={'Не притворяйтесь'} />
          <Message sender={'you'} text={'Привет'} />
          <Message sender={'he'} text={'Доброе утро!'} />
          <Message sender={'you'} text={'Вы продаете автомобиль?'} />
          <Message sender={'he'} text={'Я не понимаю о чём вы'} />
          <Message sender={'he'} text={'Вы писали мне в «Telegram»'} />
          <Message sender={'you'} text={'Не притворяйтесь'} />
          <Message sender={'you'} text={'Привет'} />
          <Message sender={'he'} text={'Доброе утро!'} />
          <Message sender={'you'} text={'Вы продаете автомобиль?'} />
          <Message sender={'he'} text={'Я не понимаю о чём вы'} />
          <Message sender={'he'} text={'Вы писали мне в «Telegram»'} />
          <Message sender={'you'} text={'Не притворяйтесь'} />
          <Message sender={'you'} text={'Привет'} />
          <Message sender={'he'} text={'Доброе утро!'} />
          <Message sender={'you'} text={'Вы продаете автомобиль?'} />
          <Message sender={'he'} text={'Я не понимаю о чём вы'} />
          <Message sender={'he'} text={'Вы писали мне в «Telegram»'} />
          <Message sender={'you'} text={'Не притворяйтесь'} />
          <Message sender={'you'} text={'Привет'} />
          <Message sender={'he'} text={'Доброе утро!'} />
          <Message sender={'you'} text={'Вы продаете автомобиль?'} />
          <Message sender={'he'} text={'Я не понимаю о чём вы'} />
          <Message sender={'he'} text={'Вы писали мне в «Telegram»'} />
          <Message sender={'you'} text={'Не притворяйтесь'} />

          <DocumentMessage userName="Иван И. " />
        </div>
      </div>
      <div className="container">
        <Block>
          <div className={styles.block}>
            <Input />
            <div
              className={styles.sercle}
              onClick={() => setShowSetings((prev) => !prev)}
            >
              <img src={clip} alt="clip" />
            </div>
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
  );
};
