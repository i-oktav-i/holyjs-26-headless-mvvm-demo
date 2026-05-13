import { FC } from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import {
  VenueListContainerProps,
  VenueListListContainerProps,
  VenueListTitleProps,
} from '../../../contracts/venuesList';

export const VenueListContainer: FC<VenueListContainerProps> = ({
  title,
  content,
}) => (
  <Paper
    component="section"
    variant="outlined"
    sx={{
      overflow: 'hidden',
      borderColor: 'divider',
      bgcolor: 'background.paper',
    }}
  >
    {title}
    <Box sx={{ p: 2 }}>{content}</Box>
  </Paper>
);

export const VenueListTitle: FC<VenueListTitleProps> = ({ children }) => (
  <Box
    component="header"
    sx={{
      px: 2,
      py: 1.5,
      borderBottom: 1,
      borderColor: 'divider',
      bgcolor: 'grey.50',
    }}
  >
    <Typography component="h2" variant="h2">
      {children}
    </Typography>
  </Box>
);

export const VenueListListContainer: FC<VenueListListContainerProps> = ({
  children,
}) => (
  <Stack spacing={1.5} sx={{ minWidth: 0 }}>
    {children}
  </Stack>
);
