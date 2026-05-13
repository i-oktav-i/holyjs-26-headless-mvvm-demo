import { ScheduleOverridesProp } from '../../contracts/schedule';
import { ScheduleDataProvider } from '../../features/ScheduleCard';
import { Schedule } from './Schedule';

export const ScheduleWidget = ({ overrides }: ScheduleOverridesProp) => (
  <ScheduleDataProvider Layout={Schedule} overrides={overrides} />
);
