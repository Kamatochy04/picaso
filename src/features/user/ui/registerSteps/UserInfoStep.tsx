import { useContext } from 'react';
import { Dropdown, Input } from '@/shared/component';

import { RegisterContext } from '../RegisterStepper';

import form from '../styles/form.module.scss';
import { NavButtons } from '@/widgets';

export const UserInfoStep = () => {
  const context = useContext(RegisterContext);

  return (
    <form className={form.form}>
      <div className={form.list}>
        <Input label="имя" />
        <Input label="фамилия" />
        <Input label="дата рождения" />
        <Dropdown
          label={'Пол'}
          onSelect={() => {}}
          options={[
            { value: 'Мужской', label: 'Мужской' },
            { value: 'Женский', label: 'Женский' },
          ]}
        />
      </div>

      <NavButtons
        backButtonClick={() => context?.toSetStep(3)}
        nextButtonClick={() => context?.toSetStep(5)}
        className={form.form__button}
      />
    </form>
  );
};
