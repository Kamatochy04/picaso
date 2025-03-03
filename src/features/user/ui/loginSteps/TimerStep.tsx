import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import form from '../styles/form.module.scss';

export const TimerStep = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('token', 'asdasd');
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      navigate('/');
    }
  }, [seconds]);

  return (
    <form className={form.form}>
      <p className={form.phone__label}>
        Автоматическое перенаправление внутрь сервиса через {seconds} сек.{' '}
      </p>
    </form>
  );
};
