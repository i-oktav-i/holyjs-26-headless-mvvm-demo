import { FC } from 'react';
import {
  VenueListItemInfoComponents,
  VenueListItemInfoComponentsOverridesProp,
  VenueListItemInfoProps,
} from '../../contracts/venuesList';

export type HeadlessVenueListItemInfoProps = VenueListItemInfoProps &
  VenueListItemInfoComponents &
  VenueListItemInfoComponentsOverridesProp;

export const HeadlessVenueListItemInfo: FC<HeadlessVenueListItemInfoProps> = ({
  Container,
  InfoItemContainer,
  Label,
  MetroStations,
  ToggleButton,
  Value,

  info,
  isOpen,
  metroInfo,
  onClose,

  overrides,
}) => {
  return (
    <Container isOpen={isOpen} onClose={onClose}>
      {info.map((infoItem) => (
        <InfoItemContainer
          key={infoItem.id}
          label={<Label>{infoItem.label}</Label>}
          value={<Value>{infoItem.value}</Value>}
          toggleButton={
            infoItem.toggleButtonProps ? (
              <ToggleButton {...infoItem.toggleButtonProps} />
            ) : null
          }
          additionalInfo={
            infoItem.id === 'metro' ? (
              <MetroStations
                {...metroInfo}
                overrides={overrides?.MetroStations}
              />
            ) : null
          }
        />
      ))}
    </Container>
  );
};
