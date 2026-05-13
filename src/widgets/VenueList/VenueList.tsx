import {
  VenueListContainer,
  VenueListListContainer,
  VenueListTitle,
} from '@tokens';
import { FC } from 'react';
import {
  VenueListOverridesProp,
  VenueListProps,
} from '../../contracts/venuesList';
import { HeadlessVenueList } from '../../headless/VenueList';
import { defineOverrides } from '../../utils';
import { VenueListItem } from './VenueListItem';

export const VenueList: FC<VenueListProps & VenueListOverridesProp> = ({
  overrides,
  ...props
}) => {
  const { components, overrides: componentsOverrides } = defineOverrides(
    {
      Container: VenueListContainer,
      Title: VenueListTitle,
      ListContainer: VenueListListContainer,
      ListItem: VenueListItem,
    },
    overrides,
  );

  return (
    <HeadlessVenueList
      {...components}
      {...props}
      overrides={componentsOverrides}
    />
  );
};
