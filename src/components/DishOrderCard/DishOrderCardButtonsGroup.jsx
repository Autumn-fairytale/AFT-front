import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

export const DishOrderCardButtonsGroup = ({
  quantity,
  handleQuantityChange,
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="outlined primary button group"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <IconButton
          onClick={() => handleQuantityChange(-1)}
          disabled={quantity <= 1}
          sx={{ color: 'primary.main' }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          component="div"
          style={{
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          {quantity}
        </Typography>
        <IconButton
          onClick={() => handleQuantityChange(1)}
          sx={{ color: 'primary.main' }}
        >
          <AddIcon />
        </IconButton>
      </ButtonGroup>
      <Button
        variant="contained"
        startIcon={<AddShoppingCartIcon />}
        sx={{ mt: 2, width: '100%' }}
      >
        Add to cart
      </Button>
    </Stack>
  );
};

DishOrderCardButtonsGroup.propTypes = {
  quantity: PropTypes.number,
  handleQuantityChange: PropTypes.func.isRequired,
};
