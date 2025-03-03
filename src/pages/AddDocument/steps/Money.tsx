import { useContext, useState } from 'react';

import { Dropdown, Input } from '@/shared/component';
import { Block, NavButtons } from '@/widgets';

import styles from '../ui/addDoc.module.scss';
import { DocumentContext } from '../ui/AddDocument';

export const Money = () => {
  const [valut, setValut] = useState('');
  const [price, setPrice] = useState('');
  const context = useContext(DocumentContext);

  const formatNumber = (number: string) => {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '');
    setPrice(formatNumber(inputValue));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Block className={styles.content}>
          <Dropdown
            label="Валюта"
            options={[{ value: 'RUB', label: 'Российский рубль' }]}
            onSelect={(value) => setValut(value)}
          />

          <Input
            label="Цена"
            valut={valut === 'RUB' ? '₽' : ''}
            value={price}
            onChange={handleNumberChange}
          />
          <Dropdown
            label="Форма"
            options={[
              { value: 'Российский рубль', label: 'Безналичная оплата' },
              { value: 'Российский рубль', label: 'Наличная оплата' },
            ]}
            onSelect={() => {}}
          />
          <Input label="Номер счёта" />
          <Dropdown
            label="Получатель"
            options={[
              { value: 'RUB', label: 'Ника Д.' },
              { value: 'RUB', label: 'Даша Г.' },
              { value: 'RUB', label: 'Миша М.' },
            ]}
            onSelect={(value) => setValut(value)}
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
