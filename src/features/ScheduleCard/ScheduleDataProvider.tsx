import { FC, useState } from 'react';

import { ScheduleProps } from '../../contracts/schedule';
import items from './data';

export type ScheduleDataProviderProps<LayoutProps> = {
  Layout: FC<LayoutProps & ScheduleProps>;
} & Omit<LayoutProps, keyof ScheduleProps>;

export const ScheduleDataProvider = <LayoutProps,>({
  Layout,
  ...layoutProps
}: ScheduleDataProviderProps<LayoutProps>) => {
  const [isOpen, setIsOpen] = useState(false);

  const scheduleProps: ScheduleProps = {
    title: 'Команда поддержки',
    openButtonProps: {
      title: isOpen ? 'Скрыть расписание' : 'Показать расписание',
      isOpen,
      onToggle: () => setIsOpen((value) => !value),
    },
    listProps: {
      isOpen,
      onClose: () => setIsOpen(false),
      listItems: items,
    },
  };

  return (
    <Layout {...scheduleProps} {...(layoutProps as unknown as LayoutProps)} />
  );
};
