import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Dropdown } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';

export const CopyrightHolder = () => {
  const context = useContext(DocumentContext);

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Правообладатель №1"
            options={[
              { value: 'adsada', label: 'Иван И.' },
              { value: 'adsada', label: 'Никата К.' },
              { value: 'adsada', label: 'Юля И.' },
            ]}
            onSelect={() => {}}
          />
          <Dropdown
            label="Правообладатель №2"
            options={[{ value: 'adsada', label: 'Влад В.' }]}
            onSelect={() => {}}
          />

          <NavButtons
            className={styles.padding}
            backButtonClick={() => navigate(-1)}
            nextButtonClick={() => context?.changeStep(+1)}
          />
        </Block>
      </div>
    </>
  );
};
