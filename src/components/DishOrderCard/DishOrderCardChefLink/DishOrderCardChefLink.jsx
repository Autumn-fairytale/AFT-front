import { Link as RouterLink } from 'react-router-dom';

import { Link, Typography } from '@mui/material';

import { DishOrderCardChefLinkProps } from './DishOrderCardChefLink.props';

export const DishOrderCardChefLink = ({ lastName, firstName, id }) => {
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
        component={RouterLink}
        to={`/chefs/${id}`}
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

DishOrderCardChefLink.propTypes = DishOrderCardChefLinkProps;
