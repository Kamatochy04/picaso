import { Dropdown, Input } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { useContext } from 'react';
import { DocumentContext } from '../ui/AddDocument';

export const DocumentObject = () => {
  const context = useContext(DocumentContext);

  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Предмет заключения документа"
            options={[{ value: 'Движимое имущество', label: 'Движимое имущество' }]}
            onSelect={() => {}}
          />

          <Input
            label="VIN-код (идентификационный номер)"
            value="1ABCD23EFGH456789"
            disabled
          />
          <Input
            label="Марка движимого имущества"
            value="LAND ROVER RANGE ROVER AUTOBIO..."
            disabled
          />
        </Block>
      </div>

      <Block className={styles.padding}>
        <NavButtons
          backButtonClick={() => context?.changeStep(0)}
          nextButtonClick={() => context?.changeStep(2)}
        />
      </Block>
    </>
  );
};
