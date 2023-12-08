/* eslint-disable react/prop-types */
import { Link, Typography } from '@mui/material';

// eslint-disable-next-line no-unused-vars
export const DishOrderCardChefLink = ({ lastName, firstName, _id }) => {
  // console.log(id, 'maybe we need chef`s id');
  return (
    <Typography
      variant="body2"
      component="span"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'underline',
        color: 'primary.main',
      }}
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
        by {firstName + ' ' + lastName}
      </Link>
    </Typography>
  );
};
