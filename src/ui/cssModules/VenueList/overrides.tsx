import { useEffect, useRef } from 'react';
import {
  VenueListItemContainerProps,
  VenueListItemInfoContainerProps,
  VenueListItemInfoItemContainerProps,
  VenueListItemInfoLabelProps,
  VenueListItemInfoMetroInfoContainerProps,
  VenueListItemInfoMetroInfoListProps,
  VenueListItemInfoToggleButtonProps,
  VenueListItemInfoValueProps,
  VenueListItemNameProps,
  VenueListItemOpenButtonProps,
  VenueListListContainerProps,
  VenueListOverrides,
} from '../../../contracts/venuesList';
import styles from './overrides.module.css';

const AccentOpenButton = ({
  label,
  isOpen,
  onClick,
}: VenueListItemOpenButtonProps) => (
  <button
    type="button"
    className={styles.openButton}
    aria-expanded={isOpen}
    onClick={onClick}
  >
    <span aria-hidden="true">{isOpen ? 'x' : '+'}</span>
    {label}
  </button>
);

const OverlayListContainer = ({ children }: VenueListListContainerProps) => (
  <div className={styles.list}>{children}</div>
);

const OverlayItemContainer = ({
  name,
  openButton,
  info,
}: VenueListItemContainerProps) => (
  <article className={styles.item}>
    <div className={styles.itemHeader}>
      {name}
      {openButton}
    </div>
    {info}
  </article>
);

const OverlayInfoContainer = ({
  isOpen,
  onClose,
  children,
}: VenueListItemInfoContainerProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    ref.current?.close();
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      onClose={handleClose}
      ref={ref}
      className={styles.detailsContainer}
    >
      <dl className={styles.details}>
        <div className={styles.detailsHeader}>
          <dt className={styles.detailsTitle}>Информация</dt>
          <dd className={styles.detailsAction}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleClose}
            >
              Закрыть
            </button>
          </dd>
        </div>
        {children}
      </dl>
    </dialog>
  );
};

const SideMetroContainer = ({
  isOpen,
  children,
}: VenueListItemInfoMetroInfoContainerProps) =>
  isOpen ? <div className={styles.metroPanel}>{children}</div> : null;

const SideMetroList = ({ stations }: VenueListItemInfoMetroInfoListProps) => (
  <ul className={styles.metroList}>
    {stations.map((station) => (
      <li key={station}>{station}</li>
    ))}
  </ul>
);

const DirectoryListContainer = ({ children }: VenueListListContainerProps) => (
  <div className={styles.directoryList}>{children}</div>
);

const DirectoryItemContainer = ({
  name,
  openButton,
  info,
}: VenueListItemContainerProps) => (
  <article className={styles.directoryItem}>
    <div className={styles.directorySummary}>
      {name}
      {openButton}
    </div>
    {info}
  </article>
);

const DirectoryName = ({ children }: VenueListItemNameProps) => (
  <h3 className={styles.directoryName}>{children}</h3>
);

const DirectoryOpenButton = ({
  label,
  isOpen,
  onClick,
}: VenueListItemOpenButtonProps) => (
  <button
    type="button"
    className={styles.directoryOpenButton}
    aria-expanded={isOpen}
    onClick={onClick}
  >
    <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
    {label}
  </button>
);

const DirectoryInfoContainer = ({
  isOpen,
  children,
}: VenueListItemInfoContainerProps) =>
  isOpen ? <dl className={styles.directoryDetails}>{children}</dl> : null;

const DirectoryInfoItemContainer = ({
  label,
  value,
  toggleButton,
  additionalInfo,
}: VenueListItemInfoItemContainerProps) => (
  <div className={styles.directoryDetailRow}>
    <dt>{label}</dt>
    <dd>
      <span>{value}</span>
      {toggleButton}
      {additionalInfo}
    </dd>
  </div>
);

const DirectoryLabel = ({ children }: VenueListItemInfoLabelProps) => (
  <span className={styles.directoryLabel}>{children}</span>
);

const DirectoryValue = ({ children }: VenueListItemInfoValueProps) => (
  <span className={styles.directoryValue}>{children}</span>
);

const DirectoryToggleButton = ({
  label,
  isOpen,
  onClick,
}: VenueListItemInfoToggleButtonProps) => (
  <button
    type="button"
    className={styles.directoryToggleButton}
    aria-expanded={isOpen}
    onClick={onClick}
  >
    {isOpen ? 'Скрыть' : label}
  </button>
);

const DirectoryMetroContainer = ({
  isOpen,
  onClose,
  children,
}: VenueListItemInfoMetroInfoContainerProps) =>
  isOpen ? (
    <div className={styles.directoryMetro}>
      <div className={styles.directoryMetroHeader}>
        <strong>Еще рядом</strong>
        <button type="button" onClick={onClose}>
          Закрыть
        </button>
      </div>
      {children}
    </div>
  ) : null;

const DirectoryMetroList = ({
  stations,
}: VenueListItemInfoMetroInfoListProps) => (
  <ul className={styles.directoryMetroList}>
    {stations.map((station) => (
      <li key={station}>{station}</li>
    ))}
  </ul>
);

export const venueListOverlayOverrides: VenueListOverrides = {
  ListContainer: OverlayListContainer,
  ListItem: {
    Container: OverlayItemContainer,
    OpenButton: AccentOpenButton,
    Info: {
      Container: OverlayInfoContainer,
      MetroStations: {
        Container: SideMetroContainer,
        List: SideMetroList,
      },
    },
  },
};

export const venueListDirectoryOverrides: VenueListOverrides = {
  ListContainer: DirectoryListContainer,
  ListItem: {
    Container: DirectoryItemContainer,
    Name: DirectoryName,
    OpenButton: DirectoryOpenButton,
    Info: {
      Container: DirectoryInfoContainer,
      InfoItemContainer: DirectoryInfoItemContainer,
      Label: DirectoryLabel,
      Value: DirectoryValue,
      ToggleButton: DirectoryToggleButton,
      MetroStations: {
        Container: DirectoryMetroContainer,
        List: DirectoryMetroList,
      },
    },
  },
};
