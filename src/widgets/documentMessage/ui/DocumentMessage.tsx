import { FC } from 'react';

import documet from '@shared/icons/Document.svg';

import style from './documentMessage.module.scss';

type DocumentMessageType = {
  userName: string;
  onClick: () => void;
};

export const DocumentMessage: FC<DocumentMessageType> = ({ userName, onClick }) => {
  return (
    <div className={style.document}>
      <img src={documet} alt="doc" />
      <p className={style.text}>
        {userName} <br />
        добавил документ <br />
        <span onClick={() => onClick()}>«Договор купли-продажи»</span>
      </p>
    </div>
  );
};
