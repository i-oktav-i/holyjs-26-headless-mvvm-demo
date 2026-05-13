import CloseIcon from '@mui/icons-material/Close';
import { Box, Collapse, IconButton, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import {
  ScheduleListContainerProps,
  ScheduleListItemProps,
} from '../../../contracts/schedule';

export const ScheduleListContainer: FC<ScheduleListContainerProps> = ({
  isOpen,
  onClose,
  children,
}) => (
  <Collapse in={isOpen} timeout="auto" unmountOnExit>
    <Paper
      component="section"
      variant="outlined"
      sx={{ mt: 0.5, overflow: 'hidden', borderColor: 'divider' }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.5,
          py: 1,
          bgcolor: 'grey.50',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography component="span" variant="subtitle2">
          На этой неделе
        </Typography>
        <IconButton type="button" size="small" aria-label="Закрыть" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Stack spacing={0} sx={{ p: 1 }}>
        {children}
      </Stack>
    </Paper>
  </Collapse>
);

export const ScheduleListItem: FC<ScheduleListItemProps> = ({
  dayLabel,
  timeLabel,
}) => (
  <Box
    component="article"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) auto',
      gap: 1.5,
      alignItems: 'center',
      px: 1,
      py: 0.9,
      borderBottom: 1,
      borderColor: 'divider',
      '&:last-child': {
        borderBottom: 0,
      },
    }}
  >
    <Typography variant="body2" sx={{ fontWeight: 700, overflowWrap: 'anywhere' }}>
      {dayLabel}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {timeLabel}
    </Typography>
  </Box>
);
