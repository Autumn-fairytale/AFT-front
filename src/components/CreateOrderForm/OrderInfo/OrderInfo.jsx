import { useMemo } from 'react';

import { Typography } from '@mui/material';

import CartInfo from '@/components/CartInfo';
import config from '@/config';
import { AppButton } from '@/shared';
import { OrderInfoPropTypes } from './OrderInfo.props';
import { OrderInfoSectionStyled } from './OrderInfo.styled';
import OrderSummary from './OrderSummary';

const OrderInfo = ({ data /*, isSubmitting*/ }) => {
  const { items } = data;
  const summary = useMemo(() => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.dish.price * item.count,
      0
    );
    const tax = subtotal * (config.taxPercent / 100);
    const delivery = 50;
    return {
      subtotal,
      tax,
      delivery,
      total: subtotal + tax + delivery,
    };
  }, [items]);

  return (
    <OrderInfoSectionStyled>
      <Typography component="h2" variant="h4" sx={{ marginBottom: '20px' }}>
        Order information
      </Typography>

      {items.length === 0 ? (
        <Typography>Choose any dishes</Typography>
      ) : (
        <>
          <CartInfo data={data} />

          <OrderSummary
            summary={summary}
            sx={{
              marginTop: '20px',
            }}
          />
          {/* {!isSubmitting && ( */}
          <AppButton
            type="submit"
            label="Place order"
            sx={{ width: '100%', marginTop: '20px' }}
          />
          {/* )} */}
        </>
      )}
    </OrderInfoSectionStyled>
  );
};

OrderInfo.propTypes = OrderInfoPropTypes;

export default OrderInfo;
