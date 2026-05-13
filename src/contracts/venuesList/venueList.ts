import { FC, PropsWithChildren, ReactNode } from 'react';
import { ComponentOverrides } from '../../utils';
import { OverridesProp } from '../../utils/overrides';
import {
  VenueListItemOverrides,
  VenueListItemOverridesProp,
  VenueListItemProps,
} from './listItem';

export type VenueListProps = {
  title: string;
  items: VenueListItemProps[];
};

export type VenueListComponents = {
  Container: FC<VenueListContainerProps>;
  Title: FC<VenueListTitleProps>;
  ListContainer: FC<VenueListListContainerProps>;
  ListItem: FC<VenueListItemProps & VenueListItemOverridesProp>;
};

export type VenueListComponentsOverrides = {
  ListItem?: VenueListItemOverrides;
};

export type VenueListContainerProps = {
  title: ReactNode;
  content: ReactNode;
};

export type VenueListTitleProps = PropsWithChildren;
export type VenueListListContainerProps = PropsWithChildren;

export type VenueListOverrides = ComponentOverrides<
  VenueListComponents,
  VenueListComponentsOverrides
>;

export type VenueListOverridesProp = OverridesProp<VenueListOverrides>;
export type VenueListComponentsOverridesProp =
  OverridesProp<VenueListComponentsOverrides>;
