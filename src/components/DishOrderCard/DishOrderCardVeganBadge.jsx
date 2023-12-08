import { Box, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { VeganIcon } from '@/assets/images/VeganIcon';

export const DishOrderCardVeganBadge = () => {
  return (
    <Tooltip title="Suitable for vegetarians and vegans" arrow>
      <Box
        elevation={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: '2px 16px',
          bgcolor: 'rgb(247, 247, 247);',
          borderRadius: 0.5,
          my: 1,
          cursor: 'help',
          height: 28,
        }}
      >
        <VeganIcon sx={{ fill: 'green', fontSize: '20px' }} />
        <Typography variant="body2" component="span" sx={{ ml: 1 }}>
          Veg
        </Typography>
      </Box>
    </Tooltip>
  );
};
