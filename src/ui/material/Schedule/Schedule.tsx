import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import {
  ScheduleContainerProps,
  ScheduleOpenButtonProps,
  ScheduleTitleProps,
} from '../../../contracts/schedule';

export const ScheduleContainer: FC<ScheduleContainerProps> = ({
  list,
  openButton,
  title,
}) => (
  <Paper component="section" variant="outlined" sx={{ p: 2 }}>
    <Stack spacing={1.5}>
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        {title}
        {openButton}
      </Stack>
      {list}
    </Stack>
  </Paper>
);

export const ScheduleTitle: FC<ScheduleTitleProps> = ({ children }) => (
  <Stack
    component="header"
    direction="row"
    spacing={1}
    sx={{ minWidth: 0, alignItems: 'center' }}
  >
    <CalendarMonthIcon color="primary" />
    <Typography component="h2" variant="h2" sx={{ overflowWrap: 'anywhere' }}>
      {children}
    </Typography>
  </Stack>
);

export const ScheduleOpenButton: FC<ScheduleOpenButtonProps> = ({
  title,
  isOpen,
  onToggle,
}) => (
  <Button
    type="button"
    size="small"
    variant={isOpen ? 'contained' : 'outlined'}
    aria-expanded={isOpen}
    onClick={onToggle}
    endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    sx={{ flexShrink: 0 }}
  >
    {title}
  </Button>
);
