import { createContext, useState, useEffect } from 'react';

import { Lefticon } from '@/shared/icons/navIcon/LeftIcon';
import { Righticon } from '@/shared/icons/navIcon/RightIcon';
import { Block } from '@/widgets';

import { CopyrightHolder } from '../steps/CopyrightHolder';
import { FormatDocument } from '../steps/DocumentFormat';
import { Money } from '../steps/Money';
import { MoreInfo } from '../steps/MoreInfoStep';
import { Transferee } from '../steps/Transferee';

import styles from './addDoc.module.scss';

const steps = [
  <CopyrightHolder />,
  <Transferee />,
  <FormatDocument />,
  <MoreInfo />,
  <Money />,
];

type TContext = {
  changeStep: (step: number) => void;
};

export const DocumentContext = createContext<TContext | undefined>(undefined);

export const AddDocument = () => {
  const [step, setStep] = useState(0);
  const [countOfSteps, setCountOfSteps] = useState(2);
  const [showStep, setShowStep] = useState(1);
  useEffect(() => {
    if (step > 1) {
      setShowStep(step - 1);

      setCountOfSteps(4);
    } else {
      setShowStep(step + 1);
      setCountOfSteps(2);
    }
  }, [step]);

  const changeStep = (stepIncrement: number) => {
    setStep((prevStep) => {
      const newStep = prevStep + stepIncrement;
      return Math.max(0, Math.min(newStep, steps.length - 1));
    });
  };

  return (
    <DocumentContext.Provider value={{ changeStep }}>
      <div className="container">
        <div className={styles.block}>
          <Block className={styles.header}>
            <div className={styles.icon} onClick={() => changeStep(-1)}>
              <Lefticon />
            </div>
            <div className={styles.header__center}>
              <p className={styles.header__text}>Формирование</p>
              <p className={styles.header__step}>
                {showStep} из {countOfSteps}
              </p>
            </div>
            <div className={styles.icon} onClick={() => changeStep(1)}>
              <Righticon />
            </div>
          </Block>

          {steps[step]}
        </div>
      </div>
    </DocumentContext.Provider>
  );
};
