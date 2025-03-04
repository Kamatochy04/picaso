import { FC, useEffect, useRef, useState } from 'react';

import { Button } from '@/shared/component';
import { Block } from '@/widgets/block';

import styles from './calendar.module.scss';

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

type CalendarProps = {
  setIsActive: () => void;
  setDate: (date: {
    year: number | null;
    month: number | null;
    day: number | null;
  }) => void;
};
export const Calendar: FC<CalendarProps> = ({ setIsActive, setDate }) => {
  const currentDate = new Date();
  const [years] = useState(
    Array.from({ length: 100 }, (_, i) => currentDate.getFullYear() - 50 + i)
  );
  const [months] = useState(Array.from({ length: 12 }, (_, i) => i + 1));
  const [days, setDays] = useState<number[]>([]);

  const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(currentDate.getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState<number>(currentDate.getDate());

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  // Обновление дней при изменении года или месяца
  useEffect(() => {
    const daysCount = getDaysInMonth(selectedYear, selectedMonth);
    setDays(Array.from({ length: daysCount }, (_, i) => i + 1));
  }, [selectedYear, selectedMonth]);

  // Функция для расчета центрального элемента
  const calculateCenterElement = (container: HTMLDivElement) => {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    let closestElement: Element | null = null;
    let minDistance = Infinity;

    container.childNodes.forEach((child) => {
      const childRect = (child as Element).getBoundingClientRect();
      const childCenterX = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenterX - centerX);

      if (distance < minDistance) {
        minDistance = distance;
        closestElement = child as Element;
      }
    });

    return closestElement;
  };

  // Обработчик скролла
  const handleScroll = (type: 'year' | 'month' | 'day') => (_e: React.WheelEvent) => {
    const container =
      type === 'year'
        ? yearRef.current
        : type === 'month'
        ? monthRef.current
        : dayRef.current;

    if (!container) return;

    const closestElement = calculateCenterElement(container);
    if (!closestElement) return;

    const value = parseInt(closestElement.getAttribute('data-value') || '0');

    // Плавная прокрутка к выбранному элементу
    closestElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });

    // Обновление состояния
    switch (type) {
      case 'year':
        setSelectedYear(value);
        break;
      case 'month':
        setSelectedMonth(value);
        break;
      case 'day':
        setSelectedDay(value);
        break;
    }
  };

  // Инициализация начальной позиции скролла
  useEffect(() => {
    const scrollToSelected = (container: HTMLDivElement | null, value: number) => {
      if (!container) return;
      const element = container.querySelector(`[data-value="${value}"]`);
      element?.scrollIntoView({ inline: 'center' });
    };

    scrollToSelected(yearRef.current, selectedYear);
    scrollToSelected(monthRef.current, selectedMonth);
    scrollToSelected(dayRef.current, selectedDay);
  }, []);

  const handleSelectDate = () => {
    setDate({
      year: selectedYear,
      month: selectedMonth,
      day: selectedDay,
    });
    setIsActive();
  };

  return (
    <Block className={styles.container}>
      <h3 className={styles.title}>Дата рождения</h3>
      <p className={styles.descr}>
        Выберите информацию, точно также, как в вашем внутреннем паспорте
      </p>

      <div className={styles.date}>
        {/* Годы */}
        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>Год</p>
          <div ref={yearRef} onWheel={handleScroll('year')} className={styles.year}>
            {years.map((year) => (
              <div
                key={year}
                data-value={year}
                className={`${styles.wrapper__year} ${
                  selectedYear === year ? styles.active : ''
                }`}
              >
                {year}
              </div>
            ))}
          </div>
        </div>

        {/* Месяцы */}
        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>Месяц</p>
          <div ref={monthRef} onWheel={handleScroll('month')} className={styles.month}>
            {months.map((month) => (
              <div
                key={month}
                data-value={month}
                className={`${styles.wrapper__month} ${
                  selectedMonth === month ? styles.active : ''
                }`}
              >
                {month.toString().padStart(2, '0')}
              </div>
            ))}
          </div>
        </div>

        {/* Дни */}
        <div className={styles.wrapper}>
          <p className={styles.wrapper__title}>День</p>
          <div ref={dayRef} onWheel={handleScroll('day')} className={styles.day}>
            {days.map((day) => (
              <div
                key={day}
                data-value={day}
                className={`${styles.wrapper__day} ${
                  selectedDay === day ? styles.active : ''
                }`}
              >
                {day.toString().padStart(2, '0')}
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
