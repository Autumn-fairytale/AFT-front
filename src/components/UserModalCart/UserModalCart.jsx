import { convertToMoney } from '@/helpers';
import { AppButton, AppModal } from '@/shared';
import { useTheme } from '@emotion/react';
import CartInfo from '../CartInfo';
import { UserModalCartPropTypes } from './UserModalCart.props';
import {
  checkoutStyles,
  modalStyles,
  UserCartFooterStyled,
  UserCartQuantityStyled,
  UserCartTotalStyled,
} from './UserModalCart.styled';

const UserModalCart = ({ isOpen, closeModal, data }) => {
  const theme = useTheme();

  return (
    <AppModal
      onClose={closeModal}
      isOpen={isOpen}
      contentProps={{ style: modalStyles }}
    >
      <CartInfo data={data} type="default" style={{ width: '600px' }} />

      <UserCartFooterStyled theme={theme}>
        <UserCartQuantityStyled>Item(s): 4 pcs.</UserCartQuantityStyled>
        <UserCartTotalStyled>Total: {convertToMoney(4000)}</UserCartTotalStyled>
        <AppButton style={{ ...checkoutStyles }} label={'Checkout'} />
      </UserCartFooterStyled>
    </AppModal>
  );
};

UserModalCart.propTypes = UserModalCartPropTypes;

export default UserModalCart;
