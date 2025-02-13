import React, { useState } from 'react';
import { Block } from '@/widgets/block';
import styles from './calendar.module.scss';
import { NavButtons } from '@/widgets/navButtons';
import { days, months, years } from '../assets/date';

export const Calendar: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  return (
    <Block className={styles.container}>
      <h3 className={styles.title}>Дата рождения</h3>
      <p className={styles.descr}>
        Выберите информацию, точно также, как в вашем внутреннем паспорте{' '}
      </p>
      <div className={styles.date}>
        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>Год</p>
          <div className={styles.year}>
            {years.map((item, id) => (
              <div
                className={`${styles.wrapper__year} ${
                  selectedYear === item ? styles.active : ''
                }`}
                key={id}
                onClick={() => setSelectedYear(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>Месяц</p>
          <div className={styles.month}>
            {months.map((item, id) => (
              <div
                className={`${styles.wrapper__month} ${
                  selectedMonth === item ? styles.active : ''
                }`}
                key={id}
                onClick={() => setSelectedMonth(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>День</p>
          <div className={styles.dey}>
            {days.map((item, id) => (
              <div
                className={`${styles.wrapper__dey} ${
                  selectedDay === item ? styles.active : ''
                }`}
                key={id}
                onClick={() => setSelectedDay(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <NavButtons
        buttonText="Выбрать"
        backButtonClick={() => {}}
        nextButtonClick={() => {}}
        className={styles.buttons}
      />
      <p className={styles.footer__text}>
        если вы зарегистрированы, <span>нажмите здесь</span>
      </p>
    </Block>
  );
};
