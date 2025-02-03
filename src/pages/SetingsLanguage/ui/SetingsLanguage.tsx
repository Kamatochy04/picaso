import { ListItem } from '@/widgets';

import { languageItems } from '../assets/language';

import styles from './setingsLanguage.module.scss';

export const SetingsLanguage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.language__container}>
        {languageItems.map((item, id, arr) => {
          return (
            <ListItem
              key={id}
              text={item.language}
              isBlocked={item.isBlocked}
              isBorder={id + 1 !== arr.length ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};
