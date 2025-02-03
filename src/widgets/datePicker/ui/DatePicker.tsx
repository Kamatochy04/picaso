// src/components/Calendar.tsx
import React, { useState } from 'react';
import './datePicker.scss';

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentYear, currentMonth, day));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`day ${selectedDate?.getDate() === day ? 'selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        {today.toLocaleString('default', { month: 'long' })} {currentYear}
      </div>
      <div className="days">{renderDays()}</div>
      {selectedDate && (
        <div className="selected-date">
          Вы выбрали: {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
};
