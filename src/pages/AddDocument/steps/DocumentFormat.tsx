import { Dropdown, Input } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';
import { DocumentContext } from '../ui/AddDocument';
import { useContext } from 'react';

import styles from '../ui/addDoc.module.scss';

export const FormatDocument = () => {
  const context = useContext(DocumentContext);
  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Юрисдикция документооборота"
            options={[{ value: 'adsada', label: 'Русский' }]}
            onSelect={() => {}}
          />
          <Dropdown
            label="Форма документа"
            options={[{ value: 'adsada', label: 'Договор о купли и продажи' }]}
            onSelect={() => {}}
          />
          <Input label="Дата создания документа" placeholder="25 января 2025" disabled />
        </Block>
      </div>
      <Block className={styles.padding}>
        <NavButtons
          backButtonClick={() => context?.changeStep(0)}
          nextButtonClick={() => context?.changeStep(1)}
        />
      </Block>
    </>
  );
};
