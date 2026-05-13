import { FC } from 'react';
import {
  VenueListItemInfoMetroInfoContainerProps,
  VenueListItemInfoMetroInfoListProps,
} from '../../../contracts/venuesList';
import styles from './VenueListItemInfoMetro.module.css';

export const VenueListItemInfoMetroContainer: FC<
  VenueListItemInfoMetroInfoContainerProps
> = ({ isOpen, children }) =>
  isOpen ? <div className={styles.panel}>{children}</div> : null;

export const VenueListItemInfoMetroList: FC<
  VenueListItemInfoMetroInfoListProps
> = ({ stations }) => (
  <ul className={styles.list}>
    {stations.map((station) => (
      <li key={station}>{station}</li>
    ))}
  </ul>
);
