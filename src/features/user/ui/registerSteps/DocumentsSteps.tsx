import { useContext, useState } from 'react';

import { RadioButton } from '@/shared/component';
import { DocumentModel, NavButtons } from '@/widgets';

import { RegisterContext } from '../RegisterStepper';
import form from '../styles/form.module.scss';

export const DocumentsStep = () => {
  const [openDoc, setOpenDoc] = useState(false);
  const [docTitle, setDocTitle] = useState('');

  const context = useContext(RegisterContext);

  const openModel = (docTitle: string) => {
    setOpenDoc(true);
    setDocTitle(docTitle);
  };

  const handleRadioChange = () => {};

  return (
    <>
      <DocumentModel
        title={docTitle}
        isOpen={openDoc}
        onClouseModel={() => setOpenDoc(false)}
      />
      <form className={form.form}>
        <div className={form.form__container_first}>
          <RadioButton
            label="Документ 1"
            value="doc_1"
            labelClick={() => openModel('Документ 1')}
          />
          <RadioButton
            label="Документ 2"
            value="doc_2"
            labelClick={() => openModel('Документ 2')}
          />
          <RadioButton
            labelClick={() => openModel('Документ 3')}
            label="Документ 3"
            value="doc_3"
            onChange={handleRadioChange}
          />
        </div>

        <NavButtons
          backButtonClick={() => context?.toSetStep(0)}
          nextButtonClick={() => context?.toSetStep(2)}
          className={form.form__button}
        />
      </form>
    </>
  );
};
