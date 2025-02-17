import { FC, useState } from 'react';
import styles from './selectBlock.module.scss';

// import checkimg from '../../../shared/icons/check.svg';
import { CheckIcon } from '@/shared/icons/CheckIcon';

type TSelectBlock = {
  text: string;
  selected?: boolean;
};

export const SelectBlock: FC<TSelectBlock> = ({ text }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`${styles.container} ${selected ? styles.active : ''}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <p className={styles.label}>{text}</p>

      <div className={styles.sercle}>{selected ? <CheckIcon /> : null}</div>
    </div>
  );
};

//<div className={styles.mark}></div>
