import { useContext, useRef } from 'react';

import { RegisterContext } from '../RegisterStepper';
import { NavButtons } from '@/widgets';

import form from '../styles/form.module.scss';

export const CodeStep = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const context = useContext(RegisterContext);

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
      <div className={form.phone__label}>Код подтверждения</div>
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

      <NavButtons
        backButtonClick={() => context?.toSetStep(2)}
        nextButtonClick={() => context?.toSetStep(4)}
        className={form.form__button}
      />
    </form>
  );
};
