import { Box, Chip, Stack } from '@mui/material';
import { FC } from 'react';
import {
  VenueListItemInfoMetroInfoContainerProps,
  VenueListItemInfoMetroInfoListProps,
} from '../../../contracts/venuesList';

export const VenueListItemInfoMetroContainer: FC<
  VenueListItemInfoMetroInfoContainerProps
> = ({ isOpen, children }) =>
  isOpen ? (
    <Box sx={{ mt: 1, pl: { sm: 0.5 } }}>
      {children}
    </Box>
  ) : null;

export const VenueListItemInfoMetroList: FC<
  VenueListItemInfoMetroInfoListProps
> = ({ stations }) => (
  <Stack
    component="ul"
    direction="row"
    useFlexGap
    sx={{ m: 0, p: 0, flexWrap: 'wrap', gap: 0.75 }}
  >
    {stations.map((station) => (
      <Box component="li" key={station} sx={{ display: 'block' }}>
        <Chip size="small" color="secondary" variant="outlined" label={station} />
      </Box>
    ))}
  </Stack>
);
