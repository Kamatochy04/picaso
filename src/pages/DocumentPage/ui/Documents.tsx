import { ArchivedIcon } from '@/shared/icons/documents/ArchivedIcon';
import { InboxIcon } from '@/shared/icons/documents/InboxIcon';
import { OutgoingIcon } from '@/shared/icons/documents/OutgoingIcon';
import { TaggedIcon } from '@/shared/icons/documents/TaggedIcon';
import { TemplateIcon } from '@/shared/icons/documents/TemplateIcon';
import { UrgentIcon } from '@/shared/icons/documents/UrgentIcon';
import { Block, ListItem } from '@/widgets';

import styles from './document.module.scss';

export const Documents = () => {
  return (
    <div className={`${styles.document} show-anim`}>
      <div className="container">
        <div className={styles.document__container}>
          <Block>
            <ListItem icon={<OutgoingIcon />} text={'Входящие'} number={7} />
            <ListItem icon={<InboxIcon />} text={'Исходящие'} number={3} />
          </Block>
          <Block>
            <ListItem icon={<UrgentIcon />} text={'Безотлагательные'} number={5} />
          </Block>
          <Block>
            <ListItem icon={<TaggedIcon />} text={'Помеченные'} number={9} />
          </Block>
          <Block>
            <ListItem icon={<TemplateIcon />} text={'Шаблонные'} number={1} />
            <ListItem icon={<ArchivedIcon />} text={'Архивированные'} number={5} />
          </Block>
        </div>
      </div>
    </div>
  );
};
