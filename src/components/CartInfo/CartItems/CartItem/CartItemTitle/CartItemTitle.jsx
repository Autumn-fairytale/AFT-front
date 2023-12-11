import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Backdrop } from '@mui/material';

import DishOrderCard from '@/components/DishOrderCard/DishOrderCard';
import { useCartTypeContext } from '@/contexts/CartTypeContext';
import { hideUserCart, showUserCart } from '@/redux/cartStatus/slice';
import { AppModal } from '@/shared/AppModal/AppModal';
import { CartItemTitlePropTypes } from './CartItemTitle.props';
import { CartItemTitleStyled } from './CartItemTitle.styled';

const CartItemTitle = ({ title, dishId, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { isDefault } = useCartTypeContext();

  const openModalHandler = () => {
    dispatch(hideUserCart());
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    dispatch(showUserCart());
  };

  return (
    <>
      <CartItemTitleStyled noWrap={true} {...props} onClick={openModalHandler}>
        {title}
      </CartItemTitleStyled>
      {isModalOpen && (
        <AppModal
          isOpen={isModalOpen}
          onClose={closeModalHandler}
          contentProps={{
            style: {
              backgroundColor: 'transparent',
              border: 'none',
              minWidth: '480px',
              minHeight: '540px',
              boxShadow: 'none',
            },
          }}
          BackdropComponent={(props) => (
            <Backdrop {...props} style={{ opacity: isDefault ? 0 : 1 }} />
          )}
        >
          <DishOrderCard
            dishId={dishId}
            closeModalHandler={closeModalHandler}
          />
        </AppModal>
      )}
    </>
  );
};

CartItemTitle.propTypes = CartItemTitlePropTypes;

export default CartItemTitle;
