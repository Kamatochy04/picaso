import { useContext, useRef } from 'react';
import { Button } from '@/shared/component';

import form from '../styles/form.module.scss';
import { LoginContext } from '../LoginStepper';

export const CodeStep = () => {
  const context = useContext(LoginContext);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <form className={form.form}>
      <div className={form.phone__label}>код подтверждения</div>
      <div className={form.number__container}>
        {[...Array(4)].map((_, index) => (
          <input
            key={index}
            type="text"
            className={form.input__sercle}
            maxLength={1}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
      </div>

      <Button
        variant="main"
        className={form.form__button}
        onClick={() => context?.toSetStep(2)}
      >
        Подтвердить
      </Button>
    </form>
  );
};
