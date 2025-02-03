import { FC } from 'react';

import style from './documentMessage.module.scss';

import documet from '@shared/icons/Document.svg';

type DocumentMessageType = {
  userName: string;
};

export const DocumentMessage: FC<DocumentMessageType> = ({ userName }) => {
  return (
    <div className={style.document}>
      <img src={documet} alt="doc" />
      <p className={style.text}>
        {userName} <br />
        добавил документ <br />
        <span>«Договор купли-продажи»</span>
      </p>
    </div>
  );
};
