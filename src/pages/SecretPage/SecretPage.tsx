import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { NavButtons } from '@/widgets';

import form from './secret.module.scss';

export const SecretPage = () => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
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
        isShowArrow={false}
        nextButtonClick={() => navigate('/register')}
        className={form.form__button}
      />
    </form>
  );
};
