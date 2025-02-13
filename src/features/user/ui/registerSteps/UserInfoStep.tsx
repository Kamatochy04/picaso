import { useContext, useState } from 'react';
import { Dropdown, Input } from '@/shared/component';

import { RegisterContext } from '../RegisterStepper';

import form from '../styles/form.module.scss';
import { Calendar, Modal, NavButtons } from '@/widgets';
import { ClouseIcon } from '@/shared/icons/ClouseIcon';

export const UserInfoStep = () => {
  const context = useContext(RegisterContext);
  const [active, setActive] = useState(false);
  return (
    <>
      {active ? (
        <Modal>
          <div className="container">
            <div className={form.icon} onClick={() => setActive(false)}>
              <ClouseIcon />
            </div>
            <Calendar />
          </div>
        </Modal>
      ) : null}
      <form className={form.form}>
        <div className={form.list}>
          <Input label="Имя" />
          <Input label="Фамилия" />
          <Dropdown
            label={'Дата рождения'}
            onClick={() => {
              console.log('sdfds');
              setActive((prev) => !prev);
            }}
            options={[]}
            onSelect={() => {}}
          />
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
    </>
  );
};
