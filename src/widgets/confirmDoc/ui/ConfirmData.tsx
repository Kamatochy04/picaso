import { useState } from 'react';

import { ConfirmDocIcon } from '@/shared/component/ConfirDocIcon';
import { NavButtons } from '@/widgets';
import { Block } from '@/widgets/block';

import styles from './confirmDoc.module.scss';

export const ConfirDoc = ({ setIsOpen }: { setIsOpen: () => void }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [buttonText, setButtonText] = useState<React.ReactNode>('Подписать');

  const handelClick = () => {
    setIsConfirm(true);
    setButtonText(<ConfirmDocIcon />);
    setTimeout(setIsOpen, 1500);
  };

  return (
    <Block className={styles.container}>
      <div className={styles.header}>
        Вы хотите подписать <br />
        <span> «Договор о купли и продажи»</span>
      </div>
      <NavButtons
        isShowArrow={!isConfirm}
        backButtonClick={() => {}}
        buttonText={buttonText}
        nextButtonClick={() => {
          handelClick();
        }}
        className={styles.button}
      />
    </Block>
  );
};
