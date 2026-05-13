import { FC } from 'react';
import {
  ScheduleContainerProps,
  ScheduleOpenButtonProps,
  ScheduleTitleProps,
} from '../../../contracts/schedule';
import styles from './Schedule.module.css';

export const ScheduleContainer: FC<ScheduleContainerProps> = ({
  list,
  openButton,
  title,
}) => (
  <section className={styles.card}>
    {title}
    {openButton}
    {list}
  </section>
);

export const ScheduleTitle: FC<ScheduleTitleProps> = ({ children }) => (
  <header className={styles.cardHeader}>
    <h2 className={styles.cardTitle}>{children}</h2>
  </header>
);

export const ScheduleOpenButton: FC<ScheduleOpenButtonProps> = ({
  title,
  isOpen,
  onToggle,
}: ScheduleOpenButtonProps) => (
  <button
    type="button"
    className={styles.openButton}
    aria-expanded={isOpen}
    onClick={onToggle}
  >
    {title}
  </button>
);
