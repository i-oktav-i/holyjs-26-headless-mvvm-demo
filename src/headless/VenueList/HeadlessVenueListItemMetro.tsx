import { FC } from 'react';
import {
  VenueListItemInfoMetroInfoComponents,
  VenueListItemInfoMetroInfoProps,
} from '../../contracts/venuesList';

export type HeadlessVenueListItemInfoMetroInfoProps =
  VenueListItemInfoMetroInfoProps & VenueListItemInfoMetroInfoComponents;

export const HeadlessVenueListItemInfoMetroInfo: FC<
  HeadlessVenueListItemInfoMetroInfoProps
> = ({ Container, List, isOpen, onClose, stations }) => {
  return (
    <Container isOpen={isOpen} onClose={onClose}>
      <List stations={stations} />
    </Container>
  );
};
