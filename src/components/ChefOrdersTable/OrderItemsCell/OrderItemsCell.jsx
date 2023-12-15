import { useState } from 'react';

import { Button, List, ListItemText, Typography } from '@mui/material';

import { OrderItemsCellProps } from './OrderItemsCell.props';
import {
  IconOrderItemsBox,
  StyledOrderItemsBox,
  StyledOrderItemsIcon,
  StyledOrderItemsListItem,
} from './OrderItemsCellStyles';

export const OrderItemsCell = ({ value }) => {
  const [open, setOpen] = useState(false);

  const hasMoreItems = value.length > 2;
  const displayItems = open ? value : value.slice(0, 2);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledOrderItemsBox>
      <IconOrderItemsBox>
        <StyledOrderItemsIcon />
        <Typography variant="body2">
          Total different positions: {value.length}
        </Typography>
      </IconOrderItemsBox>

      <List dense disablePadding>
        {displayItems.map((item, index) => (
          <StyledOrderItemsListItem key={index}>
            <ListItemText
              primary={item.dishId.name}
              secondary={`pcs: ${item.count}`}
            />
          </StyledOrderItemsListItem>
        ))}
      </List>
      {hasMoreItems && (
        <Button size="small" onClick={handleClick}>
          {open ? 'Less' : 'More'}
        </Button>
      )}
    </StyledOrderItemsBox>
  );
};

OrderItemsCell.propTypes = OrderItemsCellProps;
