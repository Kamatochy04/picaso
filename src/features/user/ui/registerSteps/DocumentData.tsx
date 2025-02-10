import { useContext } from 'react';
import { Dropdown, Input } from '@/shared/component';

import { RegisterContext } from '../RegisterStepper';

import form from '../styles/form.module.scss';
import { NavButtons } from '@/widgets';

export const DocumentStep = () => {
  const context = useContext(RegisterContext);

  return (
    <form className={form.form}>
      <div className={form.list}>
        <Dropdown
          label={'Государство выдачи паспорта'}
          onSelect={() => {}}
          options={[
            { value: 'Беларусь', label: 'Беларусь' },
            { value: 'Россия', label: 'Россия' },
          ]}
        />
        <Input label="Номер и серия" />
        <Dropdown
          label={'Дата выдачи паспорта'}
          onSelect={() => {}}
          options={[{ value: 'Россия', label: '16 сентября 2016' }]}
        />
      </div>

      <NavButtons
        backButtonClick={() => context?.toSetStep(4)}
        nextButtonClick={() => context?.toSetStep(6)}
        className={form.form__button}
      />
    </form>
  );
};
