import { FC, PropsWithChildren, ReactNode } from 'react';
import { ComponentOverrides } from '../../utils';
import { OverridesProp } from '../../utils/overrides';
import {
  VenueListItemInfoOverrides,
  VenueListItemInfoOverridesProp,
  VenueListItemInfoProps,
} from './info';

export type VenueListItemProps = VenueListItemInfoProps & {
  name: string;
  openButtonProps: VenueListItemOpenButtonProps;
};

export type VenueListItemComponents = {
  Container: FC<VenueListItemContainerProps>;
  Name: FC<VenueListItemNameProps>;
  OpenButton: FC<VenueListItemOpenButtonProps>;
  Info: FC<VenueListItemInfoProps & VenueListItemInfoOverridesProp>;
};

export type VenueListItemComponentsOverrides = {
  Info?: VenueListItemInfoOverrides;
};

export type VenueListItemContainerProps = {
  name: ReactNode;
  openButton: ReactNode;
  info: ReactNode;
};

export type VenueListItemNameProps = PropsWithChildren;

export type VenueListItemOpenButtonProps = {
  label: string;
  onClick: () => void;
  isOpen: boolean;
};

export type VenueListItemOverrides = ComponentOverrides<
  VenueListItemComponents,
  VenueListItemComponentsOverrides
>;

export type VenueListItemOverridesProp = OverridesProp<VenueListItemOverrides>;
export type VenueListItemComponentsOverridesProp =
  OverridesProp<VenueListItemComponentsOverrides>;
