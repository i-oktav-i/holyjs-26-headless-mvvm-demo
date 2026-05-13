import { FC, useCallback, useMemo, useState } from 'react';

import {
  VenueListItemInfoItemProps,
  VenueListItemProps,
  VenueListProps,
} from '../../contracts/venuesList';
import venues from './data';

export type VenueListDataProviderProps<LayoutProps> = {
  Layout: FC<LayoutProps & VenueListProps>;
  layoutProps: LayoutProps;
};

type VenueViewModel = {
  id: string;
  name: string;
  baseInfo: VenueListItemInfoItemProps[];
  primaryMetro: string;
  extraStations: string[];
};

type VenueItemVariants = {
  id: string;
  closed: VenueListItemProps;
  open: VenueListItemProps;
  openWithMetro: VenueListItemProps;
};

const venueViewModels: VenueViewModel[] = venues.map((venue) => ({
  id: venue.id,
  name: venue.name,
  baseInfo: [
    {
      id: 'address',
      label: 'Адрес',
      value: venue.address,
    },
    {
      id: 'type',
      label: 'Тип заведения',
      value: venue.venueType,
    },
    {
      id: 'rating',
      label: 'Оценка',
      value: venue.rating.toFixed(1),
    },
  ],
  primaryMetro: venue.nearestMetro[0],
  extraStations: venue.nearestMetro.slice(1),
}));

export const VenueListDataProvider = <LayoutProps,>({
  Layout,
  layoutProps,
}: VenueListDataProviderProps<LayoutProps>) => {
  const [openedVenueId, setOpenedVenueId] = useState<string | null>(null);
  const [isMetroOpen, setIsMetroOpen] = useState(false);

  const toggleVenue = useCallback((venueId: string) => {
    setOpenedVenueId((currentId) => (currentId === venueId ? null : venueId));
    setIsMetroOpen(false);
  }, []);

  const closeVenue = useCallback(() => {
    setOpenedVenueId(null);
    setIsMetroOpen(false);
  }, []);

  const toggleMetro = useCallback(() => {
    setIsMetroOpen((current) => !current);
  }, []);

  const closeMetro = useCallback(() => {
    setIsMetroOpen(false);
  }, []);

  const itemVariants = useMemo<VenueItemVariants[]>(() => {
    const createItem = (
      venue: VenueViewModel,
      isOpen: boolean,
      isMetroOpenForVenue: boolean,
    ): VenueListItemProps => ({
      isOpen,
      onClose: closeVenue,
      name: venue.name,
      openButtonProps: {
        label: isOpen ? 'Свернуть' : 'Открыть',
        isOpen,
        onClick: () => toggleVenue(venue.id),
      },
      info: [
        ...venue.baseInfo,
        {
          id: 'metro',
          label: 'Ближайшее метро',
          value: venue.primaryMetro,
          toggleButtonProps: {
            label: isMetroOpenForVenue
              ? 'Скрыть'
              : `Еще ${venue.extraStations.length}`,
            isOpen: isMetroOpenForVenue,
            onClick: toggleMetro,
          },
        },
      ],
      metroInfo: {
        isOpen: isMetroOpenForVenue,
        onClose: closeMetro,
        stations: venue.extraStations,
      },
    });

    return venueViewModels.map((venue) => ({
      id: venue.id,
      closed: createItem(venue, false, false),
      open: createItem(venue, true, false),
      openWithMetro: createItem(venue, true, true),
    }));
  }, [closeMetro, closeVenue, toggleMetro, toggleVenue]);

  const items = useMemo(
    () =>
      itemVariants.map((venue) => {
        if (openedVenueId !== venue.id) return venue.closed;

        return isMetroOpen ? venue.openWithMetro : venue.open;
      }),
    [isMetroOpen, itemVariants, openedVenueId],
  );

  const venueListProps: VenueListProps = useMemo(
    () => ({
      title: 'Заведения рядом',
      items,
    }),
    [items],
  );

  return <Layout {...venueListProps} {...layoutProps} />;
};
