import { useContext } from 'react';

import { Dropdown, Input } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';

const getFormattedDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return `${day} ${month} ${year}`;
};

export const FormatDocument = () => {
  const context = useContext(DocumentContext);
  const currentDate = getFormattedDate();

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
          <Input label="Дата создания документа" placeholder={currentDate} disabled />

          <Dropdown
            label="Предмет договора"
            options={[{ value: 'adsada', label: 'Движимое имущество' }]}
            onSelect={() => {}}
          />
          <Dropdown
            label="Категория движимого имущества"
            options={[{ value: 'adsada', label: 'Транспортное средство «В»' }]}
            onSelect={() => {}}
          />
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
