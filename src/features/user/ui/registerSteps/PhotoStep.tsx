import { useContext } from 'react';

import { NavButtons } from '@/widgets';

import { RegisterContext } from '../RegisterStepper';
import form from '../styles/form.module.scss';

export const PhotoStep = () => {
  const context = useContext(RegisterContext);

  return (
    <form className={form.form}>
      <p className={form.phone__label}>Фотография вашего паспорта</p>
      <button className={form.pasport__button}>сфотографировать</button>

      <NavButtons
        backButtonClick={() => context?.toSetStep(6)}
        nextButtonClick={() => context?.toSetStep(8)}
        className={form.form__button}
      />
    </form>
  );
};
