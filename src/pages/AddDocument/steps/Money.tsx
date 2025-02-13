import { Dropdown, Input } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';
import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';
import { useContext } from 'react';

export const Money = () => {
  const context = useContext(DocumentContext);
  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Валюта"
            options={[{ value: 'Российский рубль', label: 'Российский рубль' }]}
            onSelect={() => {}}
          />

          <Input label="Цена" disabled valut="RUB" />
          <Dropdown
            label="Форма"
            options={[
              { value: 'Российский рубль', label: 'Безналичная оплата' },
              { value: 'Российский рубль', label: 'Наличная оплата' },
            ]}
            onSelect={() => {}}
          />
          <Input label="Номер счёта" />
          <Input label="Собственник счёта" />
        </Block>
      </div>

      <Block className={styles.padding}>
        <NavButtons
          backButtonClick={() => context?.changeStep(1)}
          nextButtonClick={() => context?.changeStep(3)}
        />
      </Block>
    </>
  );
};
