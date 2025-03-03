import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '@/shared/component';
import { Block } from '@/widgets';

import { CodeStep } from './loginSteps/CodeStep';
import { PhoneStep } from './loginSteps/PhoneStep';
import { TimerStep } from './loginSteps/TimerStep';
import styles from './register.module.scss';

const loginSteps = [<PhoneStep />, <CodeStep />, <TimerStep />];

const loginStepsText = [
  'Напишите номер телефона, используемый исключительно вами',
  'Напишите код подтверждения, направленный на номер телефона',
];

type LoginContextTypes = {
  toSetStep: (step: number) => void;
};

export const LoginContext = createContext<LoginContextTypes | undefined>(undefined);

export const LoginStepper = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const toSetStep = (step: number) => {
    setStep(step);
  };

  return (
    <LoginContext.Provider value={{ toSetStep }}>
      <div className={styles.register}>
        <div className="container">
          <Logo size="S" />

          <div className={styles.register__container}>
            <h3 className={styles.title}>Авторизация</h3>
            {step === 2 ? null : <p className={styles.text}>{loginStepsText[step]}</p>}

            {loginSteps[step]}
          </div>
          {step == 0 || step == 1 ? (
            <Block className={styles.block}>
              <p className={styles.block__title}>Регистрация</p>
              <p className={styles.block__footer_l}>
                Если не зарегистрированы,{` `}
                <span onClick={() => navigate('/register')}>нажмите здесь</span>{' '}
              </p>
            </Block>
          ) : null}
        </div>
      </div>
    </LoginContext.Provider>
  );
};
