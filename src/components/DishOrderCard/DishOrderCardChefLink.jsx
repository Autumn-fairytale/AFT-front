import { Link, Typography } from '@mui/material';

export const DishOrderCardChefLink = () => {
  return (
    <Typography
      variant="body2"
      component="span"
      sx={{ textDecoration: 'underline', color: 'primary.main' }}
    >
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
        }}
        sx={{
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        by Chef Boris J.
      </Link>
    </Typography>
  );
};
