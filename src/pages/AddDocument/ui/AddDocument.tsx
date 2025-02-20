import { createContext, useState } from 'react';

import { UserHeader } from '@/widgets';

import { FormatDocument } from '../steps/DocumentFormat';
import { DocumentObject } from '../steps/DocumentObject';
import { Money } from '../steps/Money';
import { Punkts } from '../steps/Punkts';

import styles from './addDoc.module.scss';

const steps = [<FormatDocument />, <DocumentObject />, <Money />, <Punkts />];

type TContext = {
  changeStep: (step: number) => void;
};

export const DocumentContext = createContext<TContext | undefined>(undefined);

export const AddDocument = () => {
  const [step, setStep] = useState(0);

  const changeStep = (step: number) => {
    setStep(step);
  };

  return (
    <DocumentContext.Provider value={{ changeStep }}>
      <div className="container">
        <div className={styles.block}>
          <UserHeader />

          {steps[step]}
        </div>
      </div>
    </DocumentContext.Provider>
  );
};
