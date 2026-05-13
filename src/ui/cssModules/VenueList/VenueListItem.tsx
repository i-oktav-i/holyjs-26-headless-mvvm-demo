import { FC } from 'react';
import {
  VenueListItemContainerProps,
  VenueListItemNameProps,
  VenueListItemOpenButtonProps,
} from '../../../contracts/venuesList';
import styles from './VenueListItem.module.css';

export const VenueListItemContainer: FC<VenueListItemContainerProps> = ({
  name,
  openButton,
  info,
}) => (
  <article className={styles.item}>
    <div className={styles.header}>
      {name}
      {openButton}
    </div>
    {info}
  </article>
);

export const VenueListItemOpenButton: FC<VenueListItemOpenButtonProps> = ({
  label,
  isOpen,
  onClick,
}) => (
  <button
    type="button"
    className={styles.openButton}
    aria-expanded={isOpen}
    onClick={onClick}
  >
    {label}
  </button>
);

export const VenueListItemName: FC<VenueListItemNameProps> = ({ children }) => (
  <h3 className={styles.name}>{children}</h3>
);
