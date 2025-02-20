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
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, ''); // Удаление всех символов, кроме цифр
    setPrice(formatNumber(inputValue)); // Форматирование числа с пробелами
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

          <Input label="Цена" valut={valut} value={price} onChange={handleNumberChange} />
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
