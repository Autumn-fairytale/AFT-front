import { useState } from 'react';

import LocalDiningIcon from '@mui/icons-material/LocalDining';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

export const OrderItemsCell = ({ value }) => {
  const [open, setOpen] = useState(false);

  const hasMoreItems = value.length > 2;
  const displayItems = open ? value : value.slice(0, 2);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.5 }}>
        <LocalDiningIcon sx={{ mr: 0.5, color: 'text.secondary' }} />
        <Typography variant="body2">
          Total different positions: {value.length}
        </Typography>
      </Box>

      <List dense disablePadding>
        {displayItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              px: 1,
              py: 0.5,
              borderBottom: '1px solid #e0e0e0',
              ':last-child': {
                borderBottom: 0,
              },
            }}
          >
            <ListItemText
              primary={item.dishId.name}
              secondary={`pcs: ${item.count}`}
            />
          </ListItem>
        ))}
      </List>
      {hasMoreItems && (
        <Button size="small" onClick={handleClick}>
          {open ? 'Less' : 'More'}
        </Button>
      )}
    </Box>
  );
};

OrderItemsCell.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};
