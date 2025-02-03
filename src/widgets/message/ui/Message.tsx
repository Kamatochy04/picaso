import { FC } from 'react';

import styles from './message.module.scss';

type MessageType = {
  sender: 'you' | 'he';
  text: string;
};

export const Message: FC<MessageType> = ({ sender, text }) => {
  return <div className={`${styles.message} ${styles[sender]}`}>{text}</div>;
};
