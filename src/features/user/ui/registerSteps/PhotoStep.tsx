import { useContext } from 'react';

import { RegisterContext } from '../RegisterStepper';

import form from '../styles/form.module.scss';
import { NavButtons } from '@/widgets';

export const PhotoStep = () => {
  const context = useContext(RegisterContext);

  return (
    <form className={form.form}>
      <p className={form.phone__label}>фотография вашего паспорта</p>
      <button className={form.pasport__button}>сфотографировать</button>

      <NavButtons
        backButtonClick={() => context?.toSetStep(5)}
        nextButtonClick={() => context?.toSetStep(7)}
        className={form.form__button}
      />
    </form>
  );
};
