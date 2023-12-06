import { useEffect, useRef } from 'react';

import { Typography } from '@mui/material';

import { useGetOrderPaymentSignature } from '@/hooks';
import { PaymentButtonPropTypes } from './PaymentButton.props';
import {
  PaymentButtonPayStyled,
  PaymentButtonStyled,
} from './PaymentButton.styled';

const PaymentButton = ({ orderId, isAutoSubmit, ...props }) => {
  const { data } = useGetOrderPaymentSignature(orderId);
  const payment = data?.data.payment;
  const status = data?.data.status;
  const ref = useRef(null);

  useEffect(() => {
    if (isAutoSubmit && payment) {
      ref.current.submit();
    }
  }, [isAutoSubmit, payment]);

  return (
    <PaymentButtonStyled
      ref={ref}
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
      {...props}
    >
      {status && (
        <>
          {status === 'pending' ? (
            <>
              <input type="hidden" name="data" value={payment.data} />
              <input type="hidden" name="signature" value={payment.signature} />
              {!isAutoSubmit && (
                <PaymentButtonPayStyled
                  type="submit"
                  label="Pay"
                  color="secondary"
                />
              )}
            </>
          ) : (
            <>{!isAutoSubmit && <Typography>Paid</Typography>}</>
          )}
        </>
      )}
    </PaymentButtonStyled>
  );
};

PaymentButton.propTypes = PaymentButtonPropTypes;
PaymentButton.defaultProps = {
  isAutoSubmit: false,
};

export default PaymentButton;
