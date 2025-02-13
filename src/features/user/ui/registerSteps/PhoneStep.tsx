import React, { useContext, useState } from 'react';
import { Input } from '@/shared/component';
import { NavButtons } from '@/widgets';
import { RegisterContext } from '../RegisterStepper';
import form from '../styles/form.module.scss';

export const PhoneStep: React.FC = () => {
  const context = useContext(RegisterContext);
  const [phoneNumber, setPhoneNumber] = useState('+');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isValid = /^\+\d*$/.test(value);
    if (isValid) {
      setPhoneNumber(value);
    }
  };

  return (
    <form className={form.form}>
      <div className={form.phone__label}>Номер телефона</div>
      <Input
        type="tel"
        value={phoneNumber}
        onChange={handleInputChange}
        defaultValue="+"
      />
      <NavButtons
        backButtonClick={() => context?.toSetStep(1)}
        nextButtonClick={() => context?.toSetStep(3)}
        className={form.form__button}
      />
    </form>
  );
};
