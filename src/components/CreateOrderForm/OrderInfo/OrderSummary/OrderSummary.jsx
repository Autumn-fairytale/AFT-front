import { Divider } from '@mui/material';

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
        title="Delivery service:"
        amount={convertToMoney(summary.delivery)}
      />
      <OrderInfoSummaryItem
        title={`Tax:`}
        amount={convertToMoney(summary.tax)}
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
