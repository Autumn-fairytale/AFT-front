import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Box, Typography } from '@mui/material';

export const DishOrderCardRating = () => {
  return (
    <Box
      elevation={1}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: '2px 8px',
        bgcolor: 'primary.light',
        borderRadius: 0.5,
        my: 1,
        width: 110,
      }}
    >
      <ThumbUpAltIcon color="action" />
      <Typography variant="body2" component="span" sx={{ mx: 'auto' }}>
        100% (3)
      </Typography>
    </Box>
  );
};