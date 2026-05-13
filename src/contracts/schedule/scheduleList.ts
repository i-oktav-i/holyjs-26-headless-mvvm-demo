import { FC, PropsWithChildren } from 'react';
import { ComponentOverrides, OverridesProp } from '../../utils';

export type ScheduleListItemProps = {
  id: string;
  dayLabel: string;
  timeLabel: string;
};

export type ScheduleListContainerProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export type ScheduleListProps = Omit<ScheduleListContainerProps, 'children'> & {
  listItems: ScheduleListItemProps[];
};

export type ScheduleListComponents = {
  Container: FC<ScheduleListContainerProps>;
  ListItem: FC<ScheduleListItemProps>;
};

export type ScheduleListOverrides = ComponentOverrides<ScheduleListComponents>;
export type ScheduleListOverridesProp = OverridesProp<ScheduleListOverrides>;
