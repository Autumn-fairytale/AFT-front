import { IoCart } from 'react-icons/io5';

import Badge from '@mui/material/Badge';

// eslint-disable-next-line react/prop-types
export const StyledDishBadge = ({ count, isсarousel }) => {
  const badgeStyle = {
    '& .MuiBadge-badge': {
      color: 'white',
      fontSize: isсarousel ? 12 : 16,
      padding: '0 6px',
      right: -3,
      top: 8,
    },
    mr: isсarousel ? '8px' : '16px',
  };

  return (
    <Badge badgeContent={count} color="primary" sx={badgeStyle}>
      <IoCart style={{ fontSize: '24px' }} />
    </Badge>
  );
};
