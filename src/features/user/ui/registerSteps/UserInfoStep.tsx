import { useContext, useState } from 'react';
import { Dropdown, Input } from '@/shared/component';

import { RegisterContext } from '../RegisterStepper';

import form from '../styles/form.module.scss';
import { Calendar, Modal, NavButtons } from '@/widgets';
import { ClouseIcon } from '@/shared/icons/ClouseIcon';
import { ArrowIcon } from '@/shared/icons/ArrowIcon';
import { styleText } from 'util';

export const UserInfoStep = () => {
  const [_, setSelectedDate] = useState<{
    year: number | null;
    month: number | null;
    day: number | null;
  }>({
    year: null,
    month: null,
    day: null,
  });
  const [active, setActive] = useState(false);

  const context = useContext(RegisterContext);
  return (
    <>
      {active ? (
        <Modal>
          <div className={form.calendar__wrapper}>
            <div className="container ">
              <div className={form.icon} onClick={() => setActive(false)}>
                <ClouseIcon />
              </div>
              <Calendar setIsActive={() => setActive(false)} setDate={setSelectedDate} />
            </div>
          </div>
        </Modal>
      ) : null}
      <form className={form.form}>
        <div className={form.list}>
          <Input label="Имя" />
          <Input label="Фамилия" />
          <div className={form.date_container}>
            <div className={form.date_label}>Дата рождения</div>
            <div className={form.date} onClick={() => setActive((prev) => !prev)}>
              <div className={`${form.icon} ${active ? form.rotate : ''}`}>
                <ArrowIcon />
              </div>
            </div>
          </div>

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
