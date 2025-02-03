import { useContext } from 'react';

import { Block, NavButtons, SelectBlock } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';

export const Punkts = () => {
  const context = useContext(DocumentContext);

  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.punkts}>
          <SelectBlock text="Дееспособность" />
          <SelectBlock text="Доброжелательность" />
          <SelectBlock text="Добросовестность" />
          <SelectBlock text="Искренность" />
          <SelectBlock text="Нравственность" />
          <SelectBlock text="Честность" />
          <SelectBlock text="Безопасность" />
          <SelectBlock text="Вежливость" />
          <SelectBlock text="Гибкость" />
          <SelectBlock text="Намеренность" />
        </Block>
      </div>
      <Block className={styles.padding}>
        <NavButtons
          backButtonClick={() => context?.changeStep(2)}
          nextButtonClick={() => context?.changeStep(3)}
        />
      </Block>
    </>
  );
};
