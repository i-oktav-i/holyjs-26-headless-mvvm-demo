import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import {
  VenueListItemContainerProps,
  VenueListItemNameProps,
  VenueListItemOpenButtonProps,
} from '../../../contracts/venuesList';

export const VenueListItemContainer: FC<VenueListItemContainerProps> = ({
  name,
  openButton,
  info,
}) => (
  <Paper
    component="article"
    variant="outlined"
    sx={{ p: 1.5, borderColor: 'divider', bgcolor: 'background.paper' }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1.5,
        minWidth: 0,
      }}
    >
      {name}
      {openButton}
    </Box>
    {info}
  </Paper>
);

export const VenueListItemOpenButton: FC<VenueListItemOpenButtonProps> = ({
  label,
  isOpen,
  onClick,
}) => (
  <Button
    type="button"
    size="small"
    variant={isOpen ? 'contained' : 'outlined'}
    aria-expanded={isOpen}
    onClick={onClick}
    endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    sx={{ flexShrink: 0 }}
  >
    {label}
  </Button>
);

export const VenueListItemName: FC<VenueListItemNameProps> = ({ children }) => (
  <Typography
    component="h3"
    variant="h3"
    sx={{ minWidth: 0, overflowWrap: 'anywhere' }}
  >
    {children}
  </Typography>
);
