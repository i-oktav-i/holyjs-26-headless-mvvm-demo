import { VenueListOverridesProp } from '../../contracts/venuesList';
import { VenueListDataProvider } from '../../features/VenueList';
import { VenueList } from './VenueList';

export const VenueListWidget = (props: VenueListOverridesProp) => (
  <VenueListDataProvider Layout={VenueList} layoutProps={props} />
);
