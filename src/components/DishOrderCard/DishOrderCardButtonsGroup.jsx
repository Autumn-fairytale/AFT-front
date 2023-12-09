import { IoCartOutline } from 'react-icons/io5';
import { MdShoppingCartCheckout } from 'react-icons/md';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  ButtonGroup,
  Card,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

import { AppButton } from '@/shared';

export const DishOrderCardButtonsGroup = ({
  handleQuantityChange,
  handleAddToCart,
  isAddingItem,
  isInCart,
  isCartLoading,
  isUpdatingCart,
  handleGoToCart,
  isOpenedFromCreateOrder,
  closeModalHandler,
  cartItemCount,
  dishId,
  addCartItem,
}) => {
  const handleIncrementQuantity = () => {
    if (!isInCart) {
      addCartItem({ item: { dishId: dishId, count: 1 } });
    } else {
      handleQuantityChange(1);
    }
  };
  console.log('isOpenedFromCreateOrder', isOpenedFromCreateOrder);
  console.log(closeModalHandler);

  return (
    <Stack direction="row" spacing={1} component={Card} elevation={5}>
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
          disabled={cartItemCount <= 1 || isUpdatingCart}
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
          {cartItemCount}
        </Typography>
        <IconButton
          onClick={handleIncrementQuantity}
          sx={{ color: 'primary.main' }}
          disabled={isUpdatingCart}
        >
          <AddIcon />
        </IconButton>
      </ButtonGroup>
      <AppButton
        variant="contained"
        endIcon={
          isOpenedFromCreateOrder ? (
            <MdShoppingCartCheckout style={{ fontSize: '24px' }} />
          ) : isInCart ? (
            <MdShoppingCartCheckout style={{ fontSize: '24px' }} />
          ) : (
            <IoCartOutline style={{ fontSize: '24px' }} />
          )
        }
        sx={{
          mt: 2,
          width: '100%',
          backgroundColor:
            isOpenedFromCreateOrder || isInCart
              ? 'success.light'
              : 'primary.main',
        }}
        onClick={
          isOpenedFromCreateOrder
            ? closeModalHandler
            : isInCart
              ? handleGoToCart
              : handleAddToCart
        }
        disabled={isAddingItem || isCartLoading}
        label={
          isOpenedFromCreateOrder
            ? 'To Order Information'
            : isInCart
              ? 'Go to cart'
              : 'Add to cart'
        }
      />
    </Stack>
  );
};

DishOrderCardButtonsGroup.propTypes = {
  quantity: PropTypes.number,
  handleQuantityChange: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func,
  isAddingItem: PropTypes.bool,
  isInCart: PropTypes.bool,
  isCartLoading: PropTypes.bool,
  isUpdatingCart: PropTypes.bool,
  handleGoToCart: PropTypes.func,
  isOpenedFromCreateOrder: PropTypes.bool,
  closeModalHandler: PropTypes.func.isRequired,
  cartItemCount: PropTypes.number,
  dishId: PropTypes.string,
  addCartItem: PropTypes.func,
};
