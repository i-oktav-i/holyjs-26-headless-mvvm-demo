import { FC } from 'react';
import {
  ScheduleListContainerProps,
  ScheduleListItemProps,
} from '../../../contracts/schedule';
import styles from './ScheduleList.module.css';

export const ScheduleListContainer: FC<ScheduleListContainerProps> = ({
  isOpen,
  onClose,
  children,
}) => (
  <section className={`${styles.schedulePanel} ${isOpen ? styles.open : ''}`}>
    <div className={styles.schedulePanelHeader}>
      <span className={styles.schedulePanelTitle}>На этой неделе</span>
      <button type="button" className={styles.closeButton} onClick={onClose}>
        Закрыть
      </button>
    </div>
    <div className={styles.scheduleGrid}>{children}</div>
  </section>
);

export const ScheduleListItem: FC<ScheduleListItemProps> = ({
  dayLabel,
  timeLabel,
}) => (
  <article className={styles.scheduleItem}>
    <div>
      <p className={styles.scheduleDay}>{dayLabel}</p>
    </div>
    <p className={styles.scheduleTime}>{timeLabel}</p>
  </article>
);
