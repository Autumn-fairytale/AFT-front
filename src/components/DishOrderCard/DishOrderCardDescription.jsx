/* eslint-disable react/prop-types */

import { Button, Card, Typography } from '@mui/material';

export const DishOrderCardDescription = ({
  expanded,
  description,
  handleExpandClick,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        overflowY: expanded ? 'scroll' : 'hidden',
        '&::-webkit-scrollbar': {
          width: '4px',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.2)',
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: expanded ? 'none' : 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {description}
      </Typography>
      <Button
        onClick={handleExpandClick}
        sx={{ textTransform: 'none', mt: 1, p: 0, m: 0 }}
      >
        {expanded ? 'Less' : 'More'}
      </Button>
    </Card>
  );
};
