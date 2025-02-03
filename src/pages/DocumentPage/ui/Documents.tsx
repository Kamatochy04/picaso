import { Block, ListItem } from '@/widgets';
import styles from './document.module.scss';

export const Documents = () => {
  return (
    <div className={`${styles.document} show-anim`}>
      <div className="container">
        <div className={styles.document__container}>
          <Block>
            <ListItem text={'Входящие документы'} number={7} />
            <ListItem text={'Горящие документы'} number={3} />
          </Block>
          <Block>
            <ListItem text={'Важные документы'} number={5} />
          </Block>
          <Block>
            <ListItem text={'Исходящие документы'} number={9} />
          </Block>
          <Block>
            <ListItem text={'Разорванные документы'} number={1} />
          </Block>
          <Block>
            <ListItem text={'Новая категория'} isArrow={false} />
          </Block>
        </div>
      </div>
    </div>
  );
};
