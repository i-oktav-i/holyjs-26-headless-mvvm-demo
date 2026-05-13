import { FC } from 'react';
import {
  ScheduleListOverridesProp,
  ScheduleListProps,
} from '../../contracts/schedule';
import { HeadlessScheduleList } from '../../headless/ScheduleCard';

import { ScheduleListContainer, ScheduleListItem } from '@tokens';

export const ScheduleList: FC<
  ScheduleListProps & ScheduleListOverridesProp
> = ({ overrides, ...props }) => {
  return (
    <HeadlessScheduleList
      {...props}
      Container={ScheduleListContainer}
      ListItem={ScheduleListItem}
      {...overrides}
    />
  );
};
