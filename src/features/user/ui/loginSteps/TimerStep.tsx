import { useEffect, useState } from 'react';
import form from '../styles/form.module.scss';
import { useNavigate } from 'react-router-dom';

export const TimerStep = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      navigate('/main');
    }
  }, [seconds]);

  return (
    <form className={form.form}>
      <p className={form.phone__label}>Перенаправление через {seconds} секунд</p>
    </form>
  );
};
