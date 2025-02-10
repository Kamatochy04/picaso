import { useContext, useState } from 'react';

import { RadioButton } from '@/shared/component';

import form from '../styles/form.module.scss';
import { RegisterContext } from '../RegisterStepper';
import { NavButtons } from '@/widgets';

export const FirstStep = () => {
  const [selectedValue, setSelectedValue] = useState('individual');
  const context = useContext(RegisterContext);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <form className={form.form}>
      <div className={form.form__container}>
        <RadioButton
          label="Физическое лицо"
          value="individual"
          checked={selectedValue === 'individual'}
          className={selectedValue !== 'individual' ? form.not_active : ''}
          onChange={handleRadioChange}
        />
        <RadioButton
          isBlockd={true}
          label="Предприниматель"
          value="legal"
          checked={selectedValue === 'legal'}
          className={selectedValue !== 'legal' ? form.not_active : ''}
          // onChange={handleRadioChange}
        />
        <RadioButton
          isBlockd={true}
          label="Юридическое лицо"
          value="er"
          checked={selectedValue === 'er'}
          className={selectedValue !== 'legal' ? form.not_active : ''}
          // onChange={handleRadioChange}
        />
      </div>

      <NavButtons
        backButtonClick={() => context?.toSetStep(0)}
        nextButtonClick={() => context?.toSetStep(1)}
        className={form.form__button}
      />
    </form>
  );
};
