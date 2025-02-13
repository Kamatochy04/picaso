import { Button } from '@/shared/component';
import { FC } from 'react';

import styles from './navButton.module.scss';
import { ArrowIcon } from '@/shared/icons/ArrowIcon';
import { useNavigate } from 'react-router-dom';

type NavButtonsTypes = {
  nextButtonClick: () => void;
  backButtonClick?: () => void;
  className?: string;
  buttonText?: string;
};

export const NavButtons: FC<NavButtonsTypes> = ({
  backButtonClick,
  nextButtonClick,
  className,
  buttonText = 'Подтвердить',
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
    <div className={`${styles.container} ${className}`}>
      <button className={styles.squar} onClick={() => toBackStep()}>
        <ArrowIcon />
      </button>
      <Button variant="main" onClick={nextButtonClick} className={styles.button}>
        {buttonText}
      </Button>
    </div>
  );
};
