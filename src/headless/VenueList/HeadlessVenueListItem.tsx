import { FC } from 'react';
import {
  VenueListItemComponents,
  VenueListItemComponentsOverridesProp,
  VenueListItemProps,
} from '../../contracts/venuesList';

export type HeadlessVenueListItemProps = VenueListItemProps &
  VenueListItemComponents &
  VenueListItemComponentsOverridesProp;

export const HeadlessVenueListItem: FC<HeadlessVenueListItemProps> = ({
  Container,
  Info,
  Name,
  OpenButton,

  isOpen,
  onClose,
  info,
  metroInfo,
  name,
  openButtonProps,

  overrides,
}) => {
  return (
    <Container
      name={<Name>{name}</Name>}
      openButton={<OpenButton {...openButtonProps} />}
      info={
        <Info
          isOpen={isOpen}
          onClose={onClose}
          info={info}
          metroInfo={metroInfo}
          overrides={overrides?.Info}
        />
      }
    />
  );
};
