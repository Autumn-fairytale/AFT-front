import { Chip } from '@mui/material';

import { AppChipProps } from './AppChip.props';

const statusColors = {
  pending: 'default',
  accepted: 'primary',
  cooking: 'secondary',
  ready: 'info',
  readyToDelivery: 'info',
  delivering: 'warning',
  completed: 'success',
  canceled: 'error',
};

const AppChip = ({ status, sx }) => {
  const color = statusColors[status.toLowerCase()] || 'default';

  return (
    <Chip
      label={status.toUpperCase()}
      color={color}
      size="small"
      sx={{ ...sx }}
    />
  );
};

export default AppChip;

AppChip.propTypes = AppChipProps;
