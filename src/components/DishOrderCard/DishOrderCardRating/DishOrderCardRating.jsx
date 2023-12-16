import { Box, Rating, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { DishOrderCardRatingProps } from './DishOrderCardRating.props';

export const DishOrderCardRating = ({ ratingCount = 3, averageRating = 5 }) => {
  return (
    <Tooltip
      title={`${averageRating.toFixed(
        1
      )} out of 5 stars, ${ratingCount} votes `}
      arrow
    >
      <Box
        elevation={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          p: '4px 8px',
          bgcolor: 'primary.light',
          borderRadius: 0.5,
          my: 1,
          cursor: 'help',
        }}
      >
        <Rating value={averageRating} precision={0.1} readOnly size="small" />
        <Typography variant="body2" component="span">
          ({ratingCount} v.)
        </Typography>
      </Box>
    </Tooltip>
  );
};

DishOrderCardRating.propTypes = DishOrderCardRatingProps;
