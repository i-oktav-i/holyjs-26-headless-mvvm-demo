import { FC, PropsWithChildren, ReactNode } from 'react';
import { ComponentOverrides } from '../../utils';
import { OverridesProp } from '../../utils/overrides';
import {
  VenueListItemInfoMetroInfoOverrides,
  VenueListItemInfoMetroInfoOverridesProp,
  VenueListItemInfoMetroInfoProps,
} from './metro';

export type VenueListItemInfoProps = VenueListItemInfoContainerProps & {
  info: VenueListItemInfoItemProps[];
  metroInfo: VenueListItemInfoMetroInfoProps;
};

export type VenueListItemInfoComponents = {
  Container: FC<VenueListItemInfoContainerProps>;
  InfoItemContainer: FC<VenueListItemInfoItemContainerProps>;
  Label: FC<VenueListItemInfoLabelProps>;
  Value: FC<VenueListItemInfoValueProps>;
  ToggleButton: FC<VenueListItemInfoToggleButtonProps>;
  MetroStations: FC<
    VenueListItemInfoMetroInfoProps & VenueListItemInfoMetroInfoOverridesProp
  >;
};

export type VenueListItemInfoComponentsOverrides = {
  MetroStations?: VenueListItemInfoMetroInfoOverrides;
};

export type VenueListItemInfoContainerProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export type VenueListItemInfoLabelProps = PropsWithChildren;
export type VenueListItemInfoValueProps = PropsWithChildren;

export type VenueListItemInfoToggleButtonProps = {
  label: string;
  isOpen: boolean;
  onClick: () => void;
};

export type VenueListItemInfoItemContainerProps = {
  label: ReactNode;
  value: ReactNode;
  toggleButton?: ReactNode;
  additionalInfo?: ReactNode;
};

export type VenueListItemInfoItemType = 'metro' | 'address' | 'type' | 'rating';

export type VenueListItemInfoItemProps = {
  id: VenueListItemInfoItemType;
  label: string;
  value: string;
  toggleButtonProps?: VenueListItemInfoToggleButtonProps;
};

export type VenueListItemInfoOverrides = ComponentOverrides<
  VenueListItemInfoComponents,
  VenueListItemInfoComponentsOverrides
>;

export type VenueListItemInfoOverridesProp =
  OverridesProp<VenueListItemInfoOverrides>;

export type VenueListItemInfoComponentsOverridesProp =
  OverridesProp<VenueListItemInfoComponentsOverrides>;
