import { createContext, useState } from 'react';
import styles from './register.module.scss';
import { Logo } from '@/shared/component';
import { PhoneStep } from './loginSteps/PhoneStep';
import { CodeStep } from './loginSteps/CodeStep';
import { TimerStep } from './loginSteps/TimerStep';
import { useNavigate } from 'react-router-dom';

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
            <p className={styles.text}>{loginStepsText[step]}</p>

            {loginSteps[step]}

            <p className={styles.register__footer}>
              если вы не зарегистрированы,{' '}
              <span onClick={() => navigate('/register')}>нажмите здесь</span>
            </p>
          </div>
        </div>
      </div>
    </LoginContext.Provider>
  );
};
