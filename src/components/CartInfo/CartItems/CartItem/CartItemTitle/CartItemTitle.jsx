import { useState } from 'react';

import { AppModal } from '@/shared/AppModal/AppModal';
import { CartItemTitlePropTypes } from './CartItemTitle.props';
import { CartItemTitleStyled } from './CartItemTitle.styled';

const CartItemTitle = ({ title, ...props }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <CartItemTitleStyled noWrap={true} {...props} onClick={openModalHandler}>
        {title}
      </CartItemTitleStyled>
      {isModalOpen && (
        <AppModal isOpen={isModalOpen} onClose={closeModalHandler}>
          {/* <DishOrderCard  /> */}
        </AppModal>
      )}
    </>
  );
};

CartItemTitle.propTypes = CartItemTitlePropTypes;

export default CartItemTitle;
