import { ScheduleContainer, ScheduleOpenButton, ScheduleTitle } from '@tokens';
import { FC } from 'react';
import { ScheduleOverridesProp, ScheduleProps } from '../../contracts/schedule';
import { HeadlessSchedule } from '../../headless/ScheduleCard';
import { defineOverrides } from '../../utils';
import { ScheduleList } from './ScheduleList';

export const Schedule: FC<ScheduleProps & ScheduleOverridesProp> = ({
  overrides,
  ...props
}) => {
  const { components, overrides: componentsOverrides } = defineOverrides(
    {
      Container: ScheduleContainer,
      Title: ScheduleTitle,
      OpenButton: ScheduleOpenButton,
      List: ScheduleList,
    },
    overrides,
  );

  return (
    <HeadlessSchedule
      {...components}
      {...props}
      overrides={componentsOverrides}
    />
  );
};
