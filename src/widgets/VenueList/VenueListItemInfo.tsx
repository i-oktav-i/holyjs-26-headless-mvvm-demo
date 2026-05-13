import {
  VenueListItemInfoContainer,
  VenueListItemInfoItemContainer,
  VenueListItemInfoLabel,
  VenueListItemInfoToggleButton,
  VenueListItemInfoValue,
} from '@tokens';
import { FC } from 'react';
import {
  VenueListItemInfoOverridesProp,
  VenueListItemInfoProps,
} from '../../contracts/venuesList';
import { HeadlessVenueListItemInfo } from '../../headless/VenueList';
import { defineOverrides } from '../../utils';
import { VenueListItemInfoMetro } from './VenueListItemMetro';

export const VenueListItemInfo: FC<
  VenueListItemInfoProps & VenueListItemInfoOverridesProp
> = ({ overrides, ...props }) => {
  const { components, overrides: componentsOverrides } = defineOverrides(
    {
      Container: VenueListItemInfoContainer,
      InfoItemContainer: VenueListItemInfoItemContainer,
      Label: VenueListItemInfoLabel,
      Value: VenueListItemInfoValue,
      ToggleButton: VenueListItemInfoToggleButton,
      MetroStations: VenueListItemInfoMetro,
    },
    overrides,
  );

  return (
    <HeadlessVenueListItemInfo
      {...props}
      {...components}
      overrides={componentsOverrides}
    />
  );
};
