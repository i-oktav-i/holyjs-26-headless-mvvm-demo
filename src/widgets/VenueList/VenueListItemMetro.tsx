import {
  VenueListItemInfoMetroContainer,
  VenueListItemInfoMetroList,
} from '@tokens';
import { FC } from 'react';
import {
  VenueListItemInfoMetroInfoOverridesProp,
  VenueListItemInfoMetroInfoProps,
} from '../../contracts/venuesList';
import { HeadlessVenueListItemInfoMetroInfo } from '../../headless/VenueList';
import { defineOverrides } from '../../utils';

export const VenueListItemInfoMetro: FC<
  VenueListItemInfoMetroInfoProps & VenueListItemInfoMetroInfoOverridesProp
> = ({ overrides, ...props }) => {
  const { components } = defineOverrides(
    {
      Container: VenueListItemInfoMetroContainer,
      List: VenueListItemInfoMetroList,
    },
    overrides,
  );

  return (
    <HeadlessVenueListItemInfoMetroInfo
      {...props}
      {...components}
    />
  );
};
