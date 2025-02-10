import { Logo } from '@/shared/component';

import { FirstStep } from './registerSteps/FirstStep';
import { DocumentsStep } from './registerSteps/DocumentsSteps';
import { PhoneStep } from './registerSteps/PhoneStep';

import { CodeStep } from './registerSteps/CodeStep';
import { UserInfoStep } from './registerSteps/UserInfoStep';
import { createContext, useState } from 'react';
import { PhotoStep } from './registerSteps/PhotoStep';
import { TimerStep } from './registerSteps/TimerStep';

import styles from './register.module.scss';
import { useNavigate } from 'react-router-dom';
import { DocumentStep } from './registerSteps/DocumentData';

const registerSteps = [
  <FirstStep />,
  <DocumentsStep />,
  <PhoneStep />,
  <CodeStep />,
  <UserInfoStep />,
  <DocumentStep />,
  <PhotoStep />,
  <TimerStep />,
];

const registerStepsText = [
  'Выберите профиль, с которым полностью ознакомлены и согласны',
  'Выберите документ, с которым полностью ознакомлены и согласны',
  'Напишите номер телефона,  используемый исключительно вами',
  'Напишите код подтверждения, направленный на номер телефона',
  'Напишите информацию, точно также, как в вашем внутреннем паспорте ',
  'Прикрепите фотографию паспорта',
];

type RegisterContextTypes = {
  toSetStep: (step: number) => void;
};

export const RegisterContext = createContext<RegisterContextTypes | undefined>(undefined);

export const RegisterStepper = () => {
  const [step, setStep] = useState(0);

  const navigate = useNavigate();

  const toSetStep = (step: number) => {
    setStep(step);
  };

  return (
    <RegisterContext.Provider value={{ toSetStep }}>
      <div className={styles.register}>
        <div className="container">
          <Logo size="S" />

          <div className={styles.register__container}>
            <h3 className={styles.title}>
              {step === 7 ? 'Регистрация подтверждена' : 'Регистрация'}
            </h3>
            {step === 7 ? null : <p className={styles.text}>{registerStepsText[step]}</p>}
            {registerSteps[step]}
            {step === 7 ? null : (
              <p className={styles.register__footer}>
                если зарегистрированы,
                <span onClick={() => navigate('/login')}>нажмите здесь</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </RegisterContext.Provider>
  );
};
