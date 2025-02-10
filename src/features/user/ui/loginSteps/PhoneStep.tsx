import { useContext } from 'react';

import { Button, Input } from '@/shared/component';
// import country from '@/shared/img/country/img_1.png';

import { LoginContext } from '../LoginStepper';

import form from '../styles/form.module.scss';

export const PhoneStep = () => {
  const context = useContext(LoginContext);

  return (
    <form className={form.form}>
      <div className={form.phone__label}>номер телефона</div>
      {/* <div className={form.phone__container}> */}
      {/* <div className={form.phone__sercle}>
          <img src={country} alt="" />
        </div> */}
      {/* </div> */}
      <Input />

      <Button
        variant="main"
        onClick={() => context?.toSetStep(1)}
        className={form.form__button}
      >
        Подтвердить
      </Button>
    </form>
  );
};
