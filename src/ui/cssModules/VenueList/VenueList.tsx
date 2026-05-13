import { FC } from 'react';
import {
  VenueListContainerProps,
  VenueListListContainerProps,
  VenueListTitleProps,
} from '../../../contracts/venuesList';
import styles from './VenueList.module.css';

export const VenueListContainer: FC<VenueListContainerProps> = ({
  title,
  content,
}) => (
  <section className={styles.card}>
    {title}
    {content}
  </section>
);

export const VenueListTitle: FC<VenueListTitleProps> = ({ children }) => (
  <header className={styles.header}>
    <h2 className={styles.title}>{children}</h2>
  </header>
);

export const VenueListListContainer: FC<VenueListListContainerProps> = ({
  children,
}) => <div className={styles.list}>{children}</div>;
