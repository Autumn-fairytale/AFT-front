import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ResetFormButton = ({ onClick }) => {
  return (
    <Tooltip title="Reset form" placement="left">
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 20,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton onClick={onClick}>
          <RefreshOutlinedIcon fontSize="medium" />
          <Typography variant="caption">reset</Typography>
        </IconButton>
      </Box>
    </Tooltip>
  );
};
