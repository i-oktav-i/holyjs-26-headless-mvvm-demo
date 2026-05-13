import {
  VenueListItemContainer,
  VenueListItemName,
  VenueListItemOpenButton,
} from '@tokens';
import { FC } from 'react';
import {
  VenueListItemOverridesProp,
  VenueListItemProps,
} from '../../contracts/venuesList';
import { HeadlessVenueListItem } from '../../headless/VenueList';
import { defineOverrides } from '../../utils';
import { VenueListItemInfo } from './VenueListItemInfo';

export const VenueListItem: FC<
  VenueListItemProps & VenueListItemOverridesProp
> = ({ overrides, ...props }) => {
  const { components, overrides: componentsOverrides } = defineOverrides(
    {
      Container: VenueListItemContainer,
      Name: VenueListItemName,
      OpenButton: VenueListItemOpenButton,
      Info: VenueListItemInfo,
    },
    overrides,
  );

  return (
    <HeadlessVenueListItem
      {...props}
      {...components}
      overrides={componentsOverrides}
    />
  );
};
