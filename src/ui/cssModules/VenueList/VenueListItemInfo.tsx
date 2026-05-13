import { FC } from 'react';
import {
  VenueListItemInfoContainerProps,
  VenueListItemInfoItemContainerProps,
  VenueListItemInfoLabelProps,
  VenueListItemInfoToggleButtonProps,
  VenueListItemInfoValueProps,
} from '../../../contracts/venuesList';
import styles from './VenueListItemInfo.module.css';

export const VenueListItemInfoContainer: FC<VenueListItemInfoContainerProps> = ({
  isOpen,
  children,
}) => (isOpen ? <dl className={styles.details}>{children}</dl> : null);

export const VenueListItemInfoItemContainer: FC<
  VenueListItemInfoItemContainerProps
> = ({
  label,
  value,
  toggleButton,
  additionalInfo,
}) => (
  <div className={styles.row}>
    <dt className={styles.label}>{label}</dt>
    <dd className={styles.value}>
      <span>{value}</span>
      {toggleButton}
      {additionalInfo}
    </dd>
  </div>
);

export const VenueListItemInfoLabel: FC<VenueListItemInfoLabelProps> = ({
  children,
}) => <>{children}</>;

export const VenueListItemInfoValue: FC<VenueListItemInfoValueProps> = ({
  children,
}) => <>{children}</>;

export const VenueListItemInfoToggleButton: FC<
  VenueListItemInfoToggleButtonProps
> = ({ label, isOpen, onClick }) => (
  <button
    type="button"
    className={styles.toggleButton}
    aria-expanded={isOpen}
    onClick={onClick}
  >
    {label}
  </button>
);
