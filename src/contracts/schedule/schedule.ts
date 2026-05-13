import { FC, PropsWithChildren, ReactNode } from 'react';
import { ComponentOverrides, OverridesProp } from '../../utils';
import {
  ScheduleListOverrides,
  ScheduleListOverridesProp,
  ScheduleListProps,
} from './scheduleList';

export type ScheduleOpenButtonProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
};

export type ScheduleTitleProps = PropsWithChildren;

export type ScheduleContainerProps = {
  title: ReactNode;
  openButton: ReactNode;
  list: ReactNode;
};

export type ScheduleProps = {
  title: string;
  openButtonProps: ScheduleOpenButtonProps;
  listProps: ScheduleListProps;
};

export type ScheduleComponents = {
  Container: FC<ScheduleContainerProps>;
  Title: FC<ScheduleTitleProps>;
  OpenButton: FC<ScheduleOpenButtonProps>;
  List: FC<ScheduleListProps & ScheduleListOverridesProp>;
};

export type ScheduleComponentsOverrides = {
  List?: ScheduleListOverrides;
};

export type ScheduleOverrides = ComponentOverrides<
  ScheduleComponents,
  ScheduleComponentsOverrides
>;

export type ScheduleOverridesProp = OverridesProp<ScheduleOverrides>;

export type ScheduleComponentsOverridesProp =
  OverridesProp<ScheduleComponentsOverrides>;
