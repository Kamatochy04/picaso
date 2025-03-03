import { useContext } from 'react';

import { Dropdown } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';

export const Transferee = () => {
  const context = useContext(DocumentContext);

  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Правоприобретатель  №1"
            options={[
              { value: 'adsada', label: 'Иван И.' },
              { value: 'adsada', label: 'Никата К.' },
              { value: 'adsada', label: 'Юля И.' },
            ]}
            onSelect={() => {}}
          />
          <Dropdown
            label="Правоприобретатель  №2"
            options={[{ value: 'adsada', label: 'Влад В.' }]}
            onSelect={() => {}}
          />

          <NavButtons
            className={styles.padding}
            backButtonClick={() => context?.changeStep(-1)}
            nextButtonClick={() => context?.changeStep(+1)}
          />
        </Block>
      </div>
    </>
  );
};
