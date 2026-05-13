import { FC } from 'react';
import {
  ScheduleListComponents,
  ScheduleListProps,
} from '../../contracts/schedule';

export type HeadlessScheduleListProps = ScheduleListProps &
  ScheduleListComponents;

export const HeadlessScheduleList: FC<HeadlessScheduleListProps> = ({
  Container,
  ListItem,

  listItems,
  isOpen,
  onClose,
}) => {
  return (
    <Container isOpen={isOpen} onClose={onClose}>
      {listItems.map((item) => (
        <ListItem {...item} key={item.id} />
      ))}
    </Container>
  );
};
