import { Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { AppChipProps } from './AppChip.props';

export const toDelivery = '→ delivery';

const AppChip = ({ status, sx }) => {
  const theme = useTheme();
  const statusKey = status.toLowerCase();
  let chipColor = 'default';

  if (statusKey in statusColors) {
    chipColor =
      statusColors[statusKey] === 'pending'
        ? 'default'
        : statusColors[statusKey];
  }

  const chipSx = {
    ...sx,
    ...(statusKey === 'pending' && {
      bgcolor: theme.palette.pending.main,
      color: theme.palette.primary.contrastText,
    }),
    ...(statusKey === 'cooking' && {
      bgcolor: theme.palette.primary.light,
      color: theme.palette.secondary.main,
    }),
  };

  return (
    <Chip
      label={status.toUpperCase()}
      color={chipColor}
      size="small"
      sx={chipSx}
    />
  );
};

export default AppChip;

AppChip.propTypes = AppChipProps;

const statusColors = {
  pending: 'pending',
  accepted: 'primary',
  cooking: 'secondary',
  '→ delivery': 'info',
  readyToDelivery: 'info',
  delivering: 'warning',
  completed: 'success',
  canceled: 'error',
};
