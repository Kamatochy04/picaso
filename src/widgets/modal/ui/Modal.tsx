// src/components/Portal.tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './model.module.scss';

interface PortalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<PortalProps> = ({ children }) => {
  const container = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDOM.createPortal(
    <div className={styles.container}>{children} </div>,
    container
  );
};
