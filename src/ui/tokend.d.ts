declare module '@tokens' {
  import { FC } from 'react';
  import {
    ScheduleContainerProps,
    ScheduleListContainerProps,
    ScheduleListItemProps,
    ScheduleOpenButtonProps,
    ScheduleTitleProps,
  } from '../contracts/schedule';
  import {
    VenueListContainerProps,
    VenueListItemContainerProps,
    VenueListItemInfoContainerProps,
    VenueListItemInfoItemContainerProps,
    VenueListItemInfoLabelProps,
    VenueListItemInfoMetroInfoContainerProps,
    VenueListItemInfoMetroInfoListProps,
    VenueListItemInfoToggleButtonProps,
    VenueListItemInfoValueProps,
    VenueListItemNameProps,
    VenueListItemOpenButtonProps,
    VenueListListContainerProps,
    VenueListTitleProps,
  } from '../contracts/venuesList';

  export const ScheduleListItem: FC<ScheduleListItemProps>;
  export const ScheduleListContainer: FC<ScheduleListContainerProps>;

  export const ScheduleContainer: FC<ScheduleContainerProps>;
  export const ScheduleTitle: FC<ScheduleTitleProps>;
  export const ScheduleOpenButton: FC<ScheduleOpenButtonProps>;

  export const VenueListContainer: FC<VenueListContainerProps>;
  export const VenueListTitle: FC<VenueListTitleProps>;
  export const VenueListListContainer: FC<VenueListListContainerProps>;
  export const VenueListItemContainer: FC<VenueListItemContainerProps>;
  export const VenueListItemOpenButton: FC<VenueListItemOpenButtonProps>;
  export const VenueListItemName: FC<VenueListItemNameProps>;
  export const VenueListItemInfoContainer: FC<VenueListItemInfoContainerProps>;
  export const VenueListItemInfoItemContainer: FC<
    VenueListItemInfoItemContainerProps
  >;
  export const VenueListItemInfoLabel: FC<VenueListItemInfoLabelProps>;
  export const VenueListItemInfoValue: FC<VenueListItemInfoValueProps>;
  export const VenueListItemInfoToggleButton: FC<
    VenueListItemInfoToggleButtonProps
  >;
  export const VenueListItemInfoMetroContainer: FC<
    VenueListItemInfoMetroInfoContainerProps
  >;
  export const VenueListItemInfoMetroList: FC<
    VenueListItemInfoMetroInfoListProps
  >;
}
