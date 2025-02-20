import { FC, useEffect, useRef, useState } from 'react';

import { Button } from '@/shared/component';
import { Block } from '@/widgets/block';

import { days, months, years } from '../assets/date';

import styles from './calendar.module.scss';

type CalendarProps = {
  setIsActive: () => void;
  setDate: (date: {
    year: number | null;
    month: number | null;
    day: number | null;
  }) => void;
};

export const Calendar: FC<CalendarProps> = ({ setIsActive, setDate }) => {
  const [selectedYear, setSelectedYear] = useState<number | null>(years[0]);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(months[0]);
  const [selectedDay, setSelectedDay] = useState<number | null>(days[0]);

  const yearRef = useRef<HTMLDivElement | null>(null);
  const monthRef = useRef<HTMLDivElement | null>(null);
  const dayRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    setter: (value: number) => void,
    items: number[]
  ) => {
    if (ref.current) {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = ref.current.children[0]?.clientWidth || 0;
      const index = Math.floor(scrollLeft / itemWidth); // Используем floor вместо round
      if (items[index] !== undefined) {
        setter(items[index]);
      }
    }
  };

  useEffect(() => {
    const yearScrollHandler = () => handleScroll(yearRef, setSelectedYear, years);
    const monthScrollHandler = () => handleScroll(monthRef, setSelectedMonth, months);
    const dayScrollHandler = () => handleScroll(dayRef, setSelectedDay, days);

    yearRef.current?.addEventListener('scroll', yearScrollHandler);
    monthRef.current?.addEventListener('scroll', monthScrollHandler);
    dayRef.current?.addEventListener('scroll', dayScrollHandler);

    // Убедимся, что контейнеры начинаются с первого элемента
    yearRef.current?.scrollTo(0, 0);
    monthRef.current?.scrollTo(0, 0);
    dayRef.current?.scrollTo(0, 0);

    return () => {
      yearRef.current?.removeEventListener('scroll', yearScrollHandler);
      monthRef.current?.removeEventListener('scroll', monthScrollHandler);
      dayRef.current?.removeEventListener('scroll', dayScrollHandler);
    };
  }, []);

  const handleSelectDate = () => {
    setDate({ year: selectedYear, month: selectedMonth, day: selectedDay });
    setIsActive();
  };

  return (
    <Block className={styles.container}>
      <h3 className={styles.title}>Дата рождения</h3>
      <p className={styles.descr}>
        Выберите информацию, точно также, как в вашем внутреннем паспорте
      </p>
      <div className={styles.date}>
        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>Год</p>
          <div className={styles.year} ref={yearRef}>
            {years.map((item, id) => (
              <div
                className={`${styles.wrapper__year} ${
                  selectedYear === item ? styles.active : ''
                }`}
                key={id}
                data-value={item}
                data-type="year"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>Месяц</p>
          <div className={styles.month} ref={monthRef}>
            {months.map((item, id) => (
              <div
                className={`${styles.wrapper__month} ${
                  selectedMonth === item ? styles.active : ''
                }`}
                key={id}
                data-value={item}
                data-type="month"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>День</p>
          <div className={styles.day} ref={dayRef}>
            {days.map((item, id) => (
              <div
                className={`${styles.wrapper__day} ${
                  selectedDay === item ? styles.active : ''
                }`}
                key={id}
                data-value={item}
                data-type="day"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button variant="main" onClick={handleSelectDate}>
          Выбрать
        </Button>
      </div>
      <p className={styles.footer__text}>
        если вы зарегистрированы, <span>нажмите здесь</span>
      </p>
    </Block>
  );
};
