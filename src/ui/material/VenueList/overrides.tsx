import BusinessIcon from '@mui/icons-material/Business';
import CloseIcon from '@mui/icons-material/Close';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import {
  VenueListItemContainerProps,
  VenueListItemInfoContainerProps,
  VenueListItemInfoItemContainerProps,
  VenueListItemNameProps,
  VenueListItemOpenButtonProps,
  VenueListListContainerProps,
  VenueListOverrides,
} from '../../../contracts/venuesList';

const CompactListContainer = ({ children }: VenueListListContainerProps) => (
  <Stack spacing={1}>{children}</Stack>
);

const DialogItemContainer = ({
  name,
  openButton,
  info,
}: VenueListItemContainerProps) => (
  <Paper component="article" variant="outlined" sx={{ p: 1.25 }}>
    <Stack
      direction="row"
      spacing={1.5}
      sx={{ alignItems: 'center', justifyContent: 'space-between' }}
    >
      {name}
      {openButton}
    </Stack>
    {info}
  </Paper>
);

const DialogOpenButton = ({
  label,
  isOpen,
  onClick,
}: VenueListItemOpenButtonProps) => (
  <Button
    type="button"
    size="small"
    variant="contained"
    aria-expanded={isOpen}
    onClick={onClick}
    startIcon={<OpenInFullIcon />}
  >
    {label}
  </Button>
);

const DialogInfoContainer = ({
  isOpen,
  onClose,
  children,
}: VenueListItemInfoContainerProps) => (
  <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
    <DialogTitle sx={{ pr: 6 }}>
      Информация
      <IconButton
        type="button"
        aria-label="Закрыть"
        onClick={onClose}
        sx={{ position: 'absolute', right: 12, top: 10 }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
    <DialogContent dividers>
      <Stack component="dl" spacing={1.25} sx={{ m: 0 }}>
        {children}
      </Stack>
    </DialogContent>
  </Dialog>
);

const DirectoryListContainer = ({ children }: VenueListListContainerProps) => (
  <Stack spacing={0.75}>{children}</Stack>
);

const DirectoryItemContainer = ({
  name,
  openButton,
  info,
}: VenueListItemContainerProps) => (
  <Box
    component="article"
    sx={{ borderBottom: 1, borderColor: 'divider', py: 1.25 }}
  >
    <Stack
      direction="row"
      spacing={1.5}
      sx={{ alignItems: 'center', justifyContent: 'space-between' }}
    >
      {name}
      {openButton}
    </Stack>
    {info}
  </Box>
);

const DirectoryName = ({ children }: VenueListItemNameProps) => (
  <Stack direction="row" spacing={1} sx={{ minWidth: 0, alignItems: 'center' }}>
    <BusinessIcon fontSize="small" color="secondary" />
    <Typography component="h3" variant="h3" sx={{ overflowWrap: 'anywhere' }}>
      {children}
    </Typography>
  </Stack>
);

const DirectoryOpenButton = ({
  label,
  isOpen,
  onClick,
}: VenueListItemOpenButtonProps) => (
  <Button
    type="button"
    size="small"
    variant="text"
    aria-expanded={isOpen}
    onClick={onClick}
  >
    {isOpen ? 'Закрыть' : label}
  </Button>
);

const DirectoryInfoItemContainer = ({
  label,
  value,
  toggleButton,
  additionalInfo,
}: VenueListItemInfoItemContainerProps) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', sm: '140px minmax(0, 1fr)' },
      gap: 1,
      py: 0.75,
    }}
  >
    <Typography component="dt" variant="caption" color="text.secondary">
      {label}
    </Typography>
    <Box component="dd" sx={{ m: 0 }}>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        sx={{ alignItems: 'center', flexWrap: 'wrap' }}
      >
        <Typography variant="body2">{value}</Typography>
        {toggleButton}
      </Stack>
      {additionalInfo}
    </Box>
  </Box>
);

const DirectoryInfoContainer = ({
  isOpen,
  onClose,
  children,
}: VenueListItemInfoContainerProps) => {
  const [mounted, setMounted] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return (
    <Box
      component="dl"
      sx={{
        m: 0,
        mt: 1,
        p: 1.25,
        bgcolor: 'grey.50',
        borderRadius: 1,
      }}
    >
      <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
        <IconButton
          type="button"
          size="small"
          aria-label="Закрыть"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
      {children}
    </Box>
  );
};

export const venueListOverlayOverrides: VenueListOverrides = {
  ListContainer: CompactListContainer,
  ListItem: {
    Container: DialogItemContainer,
    OpenButton: DialogOpenButton,
    Info: {
      Container: DialogInfoContainer,
    },
  },
};

export const venueListDirectoryOverrides: VenueListOverrides = {
  ListContainer: DirectoryListContainer,
  ListItem: {
    Container: DirectoryItemContainer,
    Name: DirectoryName,
    OpenButton: DirectoryOpenButton,
    Info: {
      Container: DirectoryInfoContainer,
      InfoItemContainer: DirectoryInfoItemContainer,
    },
  },
};
