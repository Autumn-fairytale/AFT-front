import { Divider } from '@mui/material';

import config from '@/config';
import { convertToMoney } from '@/helpers';
import OrderInfoSummaryItem from './OrderInfoSummaryItem/OrderInfoSummaryItem';
import { OrderSummaryPropTypes } from './OrderSummary.props';
import { OrderSummaryStyled, OrderSummaryTitle } from './OrderSummary.styled';

const OrderSummary = ({ summary, ...props }) => {
  return (
    <OrderSummaryStyled {...props}>
      <OrderSummaryTitle>Summary:</OrderSummaryTitle>
      <Divider />

      <OrderInfoSummaryItem
        title="Subtotal:"
        amount={convertToMoney(summary.subtotal)}
      />
      <OrderInfoSummaryItem
        title={`Site commission (${config.taxPercent}%):`}
        amount={convertToMoney(summary.tax)}
      />
      <OrderInfoSummaryItem
        title="Delivery service:"
        amount={convertToMoney(summary.delivery)}
      />

      <Divider />
      <OrderInfoSummaryItem
        title="Total:"
        amount={convertToMoney(summary.total)}
        variant="h5"
        sx={{
          fontWeight: 600,
        }}
      />
    </OrderSummaryStyled>
  );
};

OrderSummary.propTypes = OrderSummaryPropTypes;

export default OrderSummary;
