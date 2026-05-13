import { FC } from 'react';
import {
  ScheduleComponents,
  ScheduleComponentsOverridesProp,
  ScheduleProps,
} from '../../contracts/schedule';

export type HeadlessScheduleProps = ScheduleProps &
  ScheduleComponents &
  ScheduleComponentsOverridesProp;

export const HeadlessSchedule: FC<HeadlessScheduleProps> = ({
  Container,
  List,
  OpenButton,
  Title,

  listProps,
  openButtonProps,
  title,

  overrides,
}) => {
  return (
    <Container
      title={<Title>{title}</Title>}
      openButton={<OpenButton {...openButtonProps} />}
      list={<List {...listProps} overrides={overrides?.List} />}
    />
  );
};
