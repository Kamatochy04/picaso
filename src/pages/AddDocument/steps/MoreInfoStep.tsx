import { useContext } from 'react';

import { Dropdown, Input } from '@/shared/component';
import { PhotoIcon } from '@/shared/icons/PhotoIcon';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';

export const MoreInfo = () => {
  const context = useContext(DocumentContext);

  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Марка транспортного средства"
            options={[
              { value: 'adsada', label: 'FERRARI' },
              { value: 'adsada', label: 'LAMBORGHINI' },
              { value: 'adsada', label: 'LAND ROVER' },
              { value: 'adsada', label: 'LOTUS' },
              { value: 'adsada', label: 'BMW' },
            ]}
            onSelect={() => {}}
          />
          <Input rightIcon={<PhotoIcon />} label="Идентификационный номер" />
          <Input rightIcon={<PhotoIcon />} label="Регистрационный номер" />

          <NavButtons
            className={styles.padding}
            backButtonClick={() => context?.changeStep(-1)}
            nextButtonClick={() => context?.changeStep(1)}
          />
        </Block>
      </div>
    </>
  );
};
