import { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { Input } from '@/shared/component';

import docks from '@shared/icons/Briefcase.svg';
import setings from '@shared/icons/Gear.svg';

import styles from './mainlayout.module.scss';

export const MainLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/previe');
    }
  }, []);
  return (
    <div className={`${styles.app} show-anim `}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header__container}>
            <Input
              className={styles.input}
              placeholder="найти по словам "
              isSearch={true}
            />

            <div className={styles.sercle}>
              <img src={docks} alt="docks" />
            </div>
            <NavLink
              to="setings"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              <div className={styles.sercle}>
                <img src={setings} alt="settings" />
              </div>
            </NavLink>
          </div>
        </div>
      </header>

      <div className={`${styles.content} show-anim`}>
        <Outlet />
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__container}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? styles.footer__item_active : ''} ${styles.footer__item}`
              }
              to={'people'}
            >
              <div className={styles.footer__sercle}></div>
              <p className={styles.footer__text}>Контакты</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? styles.footer__item_active : ''} ${styles.footer__item}`
              }
              to={'/'}
            >
              <div className={styles.footer__sercle}></div>
              <p className={styles.footer__text}>Диалоги</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? styles.footer__item_active : ''} ${styles.footer__item}`
              }
              to={'documents'}
            >
              <div className={styles.footer__sercle}></div>
              <p className={styles.footer__text}>Документы</p>
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};
