import { useContext, useState } from 'react';

import { Dropdown, Input } from '@/shared/component';
import { ArrowIcon } from '@/shared/icons/ArrowIcon';
import { ClouseIcon } from '@/shared/icons/ClouseIcon';
import { Calendar, Modal, NavButtons } from '@/widgets';

import { RegisterContext } from '../RegisterStepper';
import form from '../styles/form.module.scss';

export const DocumentStep = () => {
  const [, setSelectedDate] = useState<{
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
            <div className="container">
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
          <Dropdown
            label={'Государство выдачи паспорта'}
            onSelect={() => {}}
            options={[
              { value: 'Беларусь', label: 'Беларусь' },
              { value: 'Россия', label: 'Россия' },
            ]}
          />
          <Input label="Номер и серия" />
          <div className={form.date_container}>
            <div className={form.date_label}>Дата выдачи паспорта</div>
            <div className={form.date} onClick={() => setActive((prev) => !prev)}>
              <div className={`${form.icon} ${active ? form.rotate : ''}`}>
                <ArrowIcon />
              </div>
            </div>
          </div>
          {/* <Dropdown
            label={'Дата выдачи паспорта'}
            onClick={() => {
              setActive((prev) => !prev);
            }}
            options={[]}
            onSelect={() => {}}
          /> */}
        </div>

        <NavButtons
          backButtonClick={() => context?.toSetStep(4)}
          nextButtonClick={() => context?.toSetStep(6)}
          className={form.form__button}
        />
      </form>
    </>
  );
};
