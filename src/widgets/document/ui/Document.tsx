import { FC } from 'react';

import { Modal } from '@/widgets/modal';
import { ClouseIcon } from '@/shared/icons/ClouseIcon';

import styles from './docuemt.module.scss';

type DocumentModelType = {
  title: string;
  isOpen?: boolean;
  onClouseModel: () => void;
};

export const DocumentModel: FC<DocumentModelType> = ({
  title,
  onClouseModel,
  isOpen = false,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal>
      <div className="container h_100">
        <div className={styles.doc}>
          <div className={styles.icon} onClick={onClouseModel}>
            <ClouseIcon />
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
      </div>
    </Modal>
  );
};
