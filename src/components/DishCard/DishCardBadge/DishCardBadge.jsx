import { IoCart } from 'react-icons/io5';

import Badge from '@mui/material/Badge';

import { StyledDishBadgeProps } from './DishCardBadge.props';

export const StyledDishBadge = ({ count, iscarousel }) => {
  const badgeStyle = {
    '& .MuiBadge-badge': {
      color: 'white',
      fontSize: iscarousel ? 12 : 16,
      padding: '0 5px',
      right: -6,
      top: 8,
      backgroundColor: '#363945',
      border: (theme) => `2px solid ${theme.palette.background.paper}`,
    },
    mr: iscarousel ? '8px' : '16px',
  };

  return (
    <Badge badgeContent={count} sx={badgeStyle}>
      <IoCart style={{ fontSize: '24px' }} />
    </Badge>
  );
};

StyledDishBadge.propTypes = StyledDishBadgeProps;
