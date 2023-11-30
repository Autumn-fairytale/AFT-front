import { useEffect, useRef, useState } from 'react';

import { PaymentButtonPropTypes } from './PaymentButton.props';
import {
  PaymentButtonPayStyled,
  PaymentButtonStyled,
} from './PaymentButton.styled';

const PaymentButton = ({ data, signature, isAutoSubmit, ...props }) => {
  const [payment, setPayment] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    // TODO: Fetch order to get data and signature
    setPayment({ data, signature });
  }, [data, signature]);

  useEffect(() => {
    if (isAutoSubmit && payment) ref.current.submit();
  }, [isAutoSubmit, payment]);

  return (
    <PaymentButtonStyled
      ref={ref}
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
      {...props}
    >
      {payment && (
        <>
          <input type="hidden" name="data" value={payment.data} />
          <input type="hidden" name="signature" value={payment.signature} />
          <PaymentButtonPayStyled type="submit" label="Pay" color="secondary" />
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
