import { useContext } from 'react';
import { Input } from '@/shared/component';

import { NavButtons } from '@/widgets';
// import country from '@/shared/img/country/img_1.png';
import { RegisterContext } from '../RegisterStepper';

import form from '../styles/form.module.scss';

export const PhoneStep = () => {
  const context = useContext(RegisterContext);

  return (
    <form className={form.form}>
      <div className={form.phone__label}>номер телефона</div>
      <div className={form.phone__container}>
        {/* <div className={form.phone__sercle}>
          <img src={country} alt="" />
        </div> */}
        <Input />
      </div>

      <NavButtons
        backButtonClick={() => context?.toSetStep(1)}
        nextButtonClick={() => context?.toSetStep(3)}
        className={form.form__button}
      />
    </form>
  );
};
