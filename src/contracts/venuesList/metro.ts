import { FC, PropsWithChildren } from 'react';
import { ComponentOverrides } from '../../utils';
import { OverridesProp } from '../../utils/overrides';

export type VenueListItemInfoMetroInfoProps =
  VenueListItemInfoMetroInfoContainerProps &
    VenueListItemInfoMetroInfoListProps;

export type VenueListItemInfoMetroInfoContainerProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export type VenueListItemInfoMetroInfoListProps = {
  stations: string[];
};

export type VenueListItemInfoMetroInfoComponents = {
  Container: FC<VenueListItemInfoMetroInfoContainerProps>;
  List: FC<VenueListItemInfoMetroInfoListProps>;
};

export type VenueListItemInfoMetroInfoOverrides =
  ComponentOverrides<VenueListItemInfoMetroInfoComponents>;

export type VenueListItemInfoMetroInfoOverridesProp =
  OverridesProp<VenueListItemInfoMetroInfoOverrides>;
