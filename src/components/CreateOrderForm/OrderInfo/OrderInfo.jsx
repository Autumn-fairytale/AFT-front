import { useMemo } from 'react';

import { Alert, Box, LinearProgress, Typography } from '@mui/material';

import CartInfo from '@/components/CartInfo';
import config from '@/config';
import { calcOrderSummary } from '@/helpers';
import { AppButton } from '@/shared';
import { OrderInfoPropTypes } from './OrderInfo.props';
import { OrderInfoFooter, OrderInfoSectionStyled } from './OrderInfo.styled';
import OrderSummary from './OrderSummary';

const OrderInfo = ({ data, isSubmitting }) => {
  const { items } = data;

  const info = useMemo(() => {
    const summary = calcOrderSummary(items, config.deliveryService);

    return {
      summary,
      hasUnavailableItem: items.some(
        ({ dish: { isAvailable } }) => !isAvailable
      ),
    };
  }, [items]);

  return (
    <OrderInfoSectionStyled>
      <Typography component="h2" variant="h4" sx={{ marginBottom: '20px' }}>
        Order information
      </Typography>

      <CartInfo data={data} />

      <OrderSummary
        summary={info.summary}
        sx={{
          marginTop: '10px',
        }}
      />

      <OrderInfoFooter sx={{ mt: '10px' }}>
        {info.hasUnavailableItem ? (
          <Alert
            severity="warning"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Some dishes are currently unavailable! Please delete them.
          </Alert>
        ) : (
          <>
            {!isSubmitting ? (
              <AppButton
                type="submit"
                label="Place order"
                sx={{ width: '100%' }}
              />
            ) : (
              <Box sx={{ width: '100%' }}>
                <LinearProgress />
                <Typography
                  sx={{ fontStyle: 'italic', textAlign: 'center', mt: '10px' }}
                >
                  Creating order...
                </Typography>
              </Box>
            )}
          </>
        )}
      </OrderInfoFooter>
    </OrderInfoSectionStyled>
  );
};

OrderInfo.propTypes = OrderInfoPropTypes;

export default OrderInfo;
