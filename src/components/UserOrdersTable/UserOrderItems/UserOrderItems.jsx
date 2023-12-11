import UserOrderItem from './UserOrderItem/UserOrderItem';
import { UserOrderItemsPropTypes } from './UserOrderItems.props';
import { UserOrderItemsStyled } from './UserOrderItems.styled';

const UserOrderItems = ({ items, ...props }) => {
  return (
    <UserOrderItemsStyled {...props}>
      {items.map(({ dish }) => (
        <UserOrderItem key={dish.id} dish={dish} />
      ))}
    </UserOrderItemsStyled>
  );
};

UserOrderItems.propTypes = UserOrderItemsPropTypes;

export default UserOrderItems;
