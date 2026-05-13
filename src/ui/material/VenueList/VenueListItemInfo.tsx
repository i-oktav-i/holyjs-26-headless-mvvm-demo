import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Collapse, IconButton, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import {
  VenueListItemInfoContainerProps,
  VenueListItemInfoItemContainerProps,
  VenueListItemInfoLabelProps,
  VenueListItemInfoToggleButtonProps,
  VenueListItemInfoValueProps,
} from '../../../contracts/venuesList';

export const VenueListItemInfoContainer: FC<VenueListItemInfoContainerProps> = ({
  isOpen,
  onClose,
  children,
}) => (
  <Collapse in={isOpen} timeout="auto" unmountOnExit>
    <Box
      component="dl"
      sx={{
        mt: 1.5,
        mb: 0,
        p: 1.5,
        borderRadius: 1,
        bgcolor: 'grey.50',
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 0.5 }}>
        <IconButton type="button" size="small" aria-label="Закрыть" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Stack spacing={1}>{children}</Stack>
    </Box>
  </Collapse>
);

export const VenueListItemInfoItemContainer: FC<
  VenueListItemInfoItemContainerProps
> = ({ label, value, toggleButton, additionalInfo }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', sm: '120px minmax(0, 1fr)' },
      gap: { xs: 0.25, sm: 1.5 },
      alignItems: 'start',
    }}
  >
    <Typography component="dt" variant="body2" color="text.secondary">
      {label}
    </Typography>
    <Box component="dd" sx={{ m: 0, minWidth: 0 }}>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ alignItems: 'center', flexWrap: 'wrap' }}
      >
        <Typography component="span" variant="body2" sx={{ overflowWrap: 'anywhere' }}>
          {value}
        </Typography>
        {toggleButton}
      </Stack>
      {additionalInfo}
    </Box>
  </Box>
);

export const VenueListItemInfoLabel: FC<VenueListItemInfoLabelProps> = ({
  children,
}) => <>{children}</>;

export const VenueListItemInfoValue: FC<VenueListItemInfoValueProps> = ({
  children,
}) => <>{children}</>;

export const VenueListItemInfoToggleButton: FC<
  VenueListItemInfoToggleButtonProps
> = ({ label, isOpen, onClick }) => (
  <Button
    type="button"
    size="small"
    variant="text"
    aria-expanded={isOpen}
    onClick={onClick}
    endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  >
    {isOpen ? 'Скрыть' : label}
  </Button>
);
