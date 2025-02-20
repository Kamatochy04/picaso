import { useContext, useState } from 'react';

import { Dropdown, Input } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';

export const DocumentObject = () => {
  const [documentObject, setDocumentObject] = useState('');
  const [mark, setMark] = useState('');
  const [text, setText] = useState('');
  const context = useContext(DocumentContext);

  const handleSelect = (e: any) => {
    setDocumentObject(e);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Предмет заключения документа"
            options={[{ value: 'Движимое имущество', label: 'Движимое имущество' }]}
            onSelect={handleSelect}
          />

          {documentObject ? (
            <>
              <Input
                label="VIN-код (идентификационный номер)"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
              <Input
                onChange={(e) => setMark(e.target.value)}
                label="Марка движимого имущества"
                value={mark}
              />
            </>
          ) : null}
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
