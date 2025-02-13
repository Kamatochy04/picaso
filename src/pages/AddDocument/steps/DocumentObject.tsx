import { Dropdown, Input } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { useContext, useState } from 'react';
import { DocumentContext } from '../ui/AddDocument';

export const DocumentObject = () => {
  const [text, setText] = useState('1ABCD23EFGH456789');

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
            value={text}
            onChange={(event) => setText(event.target.value)}
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
