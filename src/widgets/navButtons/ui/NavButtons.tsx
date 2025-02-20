import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/component';
import { ArrowIcon } from '@/shared/icons/ArrowIcon';

import styles from './navButton.module.scss';

type NavButtonsTypes = {
  nextButtonClick: () => void;
  backButtonClick?: () => void;
  className?: string;
  buttonText?: string;
  isShowArrow?: boolean;
};

export const NavButtons: FC<NavButtonsTypes> = ({
  backButtonClick,
  nextButtonClick,
  className,
  buttonText = 'Подтвердить',
  isShowArrow = true,
}) => {
  const navigate = useNavigate();

  const toBackStep = () => {
    if (backButtonClick) {
      backButtonClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={`${styles.container} ${className} ${isShowArrow ? '' : styles.line}`}>
      {isShowArrow ? (
        <button className={styles.squar} onClick={() => toBackStep()}>
          <ArrowIcon />
        </button>
      ) : null}
      <Button variant="main" onClick={nextButtonClick} className={styles.button}>
        {buttonText}
      </Button>
    </div>
  );
};
