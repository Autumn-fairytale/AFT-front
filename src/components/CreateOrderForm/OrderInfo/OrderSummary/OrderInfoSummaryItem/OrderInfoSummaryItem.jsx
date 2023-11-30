import { OrderInfoSummaryItemPropTypes } from './OrderInfoSummaryItem.props';
import { OrderInfoSummaryItemStyled } from './OrderInfoSummaryItem.styled';

const OrderInfoSummaryItem = ({ title, amount, ...props }) => {
  return (
    <OrderInfoSummaryItemStyled component="p" variant="body2" {...props}>
      <span>{title}</span>
      <span>{amount}</span>
    </OrderInfoSummaryItemStyled>
  );
};

OrderInfoSummaryItem.propTypes = OrderInfoSummaryItemPropTypes;

export default OrderInfoSummaryItem;
