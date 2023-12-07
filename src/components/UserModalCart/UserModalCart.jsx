import { useMemo } from 'react';

import PropTypes from 'prop-types';

import { calcTotalAmountOfCartItems, convertToMoney } from '@/helpers';
import { useGetCartItems } from '@/hooks';
import { AppButton, AppLoader, AppModal } from '@/shared';
import { useTheme } from '@emotion/react';
import CartInfo from '../CartInfo';
import PageMessage from '../PageMessage';
import { UserModalCartPropTypes } from './UserModalCart.props';
import {
  cartLoaderStyles,
  checkoutStyles,
  modalStyles,
  UserCartFooterStyled,
  UserCartQuantityStyled,
  UserCartTotalStyled,
  UserCartWarningStyled,
} from './UserModalCart.styled';

const UserCartSummary = ({ data }) => {
  const theme = useTheme();
  const { items } = data;

  const summaryInfo = useMemo(() => {
    const totalPrice = calcTotalAmountOfCartItems(items);
    const totalQty = items.reduce((acc, { count }) => acc + count, 0);
    const hasUnavailableItem = items.some(
      ({ dish: { isAvailable } }) => !isAvailable
    );
    const units = totalQty === 1 ? 'pc.' : 'pcs.';

    return {
      totalPrice,
      totalQty,
      units,
      hasUnavailableItem,
    };
  }, [items]);

  const { totalQty, units, hasUnavailableItem, totalPrice } = summaryInfo;

  return (
    <>
      <CartInfo data={data} type="default" />

      {hasUnavailableItem ? (
        <UserCartWarningStyled severity="warning">
          Some dishes are currently unavailable! Please delete them.
        </UserCartWarningStyled>
      ) : (
        <UserCartFooterStyled theme={theme}>
          <UserCartQuantityStyled>
            Item(s): {totalQty} {units}
          </UserCartQuantityStyled>
          <UserCartTotalStyled>
            Total: {convertToMoney(totalPrice)}
          </UserCartTotalStyled>
          <AppButton style={{ ...checkoutStyles }} label={'Checkout'} />
        </UserCartFooterStyled>
      )}
    </>
  );
};

UserCartSummary.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.number.isRequired,
        dish: PropTypes.shape({
          isAvailable: PropTypes.bool.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const UserModalCartContent = () => {
  const { data, isLoading, error } = useGetCartItems();

  if (isLoading) {
    return <AppLoader style={cartLoaderStyles} />;
  } else if (error) {
    return <PageMessage variant="error" message={error.message} />;
  } else if (data?.success) {
    return data.cart.items.length === 0 ? (
      <PageMessage
        variant="no-data"
        message="Oops! No products were found in the cart!"
      />
    ) : (
      <UserCartSummary data={data.cart} />
    );
  }
};

const UserModalCart = ({ isOpen, closeModal }) => {
  return (
    <AppModal
      onClose={closeModal}
      isOpen={isOpen}
      contentProps={{ style: modalStyles }}
    >
      <UserModalCartContent />
    </AppModal>
  );
};

UserModalCart.propTypes = UserModalCartPropTypes;

export default UserModalCart;
