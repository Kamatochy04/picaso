import { useContext, useState } from 'react';

import { RadioButton } from '@/shared/component';
import { NavButtons } from '@/widgets';

import { RegisterContext } from '../RegisterStepper';
import form from '../styles/form.module.scss';

export const AccountType = () => {
  const [selectedValue, setSelectedValue] = useState('individual');
  const context = useContext(RegisterContext);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <form className={form.form}>
        <div className={form.form__container}>
          <RadioButton
            label="Персональная страница"
            value="individual"
            checked={selectedValue === 'individual'}
            className={selectedValue !== 'individual' ? form.not_active : ''}
            onChange={() => handleRadioChange('individual')}
          />
          <RadioButton
            // isBlockd={selectedValue === 'individual'}
            label="Представитель"
            value="legal"
            checked={selectedValue === 'legal'}
            className={selectedValue !== 'legal' ? form.not_active : ''}
            onChange={() => handleRadioChange('legal')}
          />
          <RadioButton
            // isBlockd={selectedValue === 'individual'}
            label="Доверитель"
            value="er"
            checked={selectedValue === 'er'}
            className={selectedValue !== 'er' ? form.not_active : ''}
            onChange={() => handleRadioChange('er')}
          />
        </div>

        <NavButtons
          backButtonClick={() => context?.toSetStep(0)}
          nextButtonClick={() => context?.toSetStep(2)}
          className={form.form__button}
        />
      </form>
    </>
  );
};
