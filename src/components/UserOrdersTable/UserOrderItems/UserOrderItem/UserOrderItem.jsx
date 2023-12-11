import DishOrderCard from '@/components/DishOrderCard/DishOrderCard';
import { useModal } from '@/hooks';
import { AppImage, AppModal } from '@/shared';
import { UserOrderItemPropTypes } from './UserOrderItem.props';
import { UserOrderItemStyled } from './UserOrderItem.styled';

const UserOrderItem = ({ dish, ...props }) => {
  const { isOpen, onClose, openModal } = useModal();
  return (
    <>
      <UserOrderItemStyled onClick={openModal} {...props}>
        <AppImage
          src={dish.image}
          alt={dish.name}
          width={40}
          height={40}
          sx={{ boxShadow: 1 }}
        />
      </UserOrderItemStyled>
      {isOpen && (
        <AppModal
          isOpen={isOpen}
          onClose={onClose}
          contentProps={{
            style: {
              backgroundColor: 'transparent',
              border: 'none',
              minWidth: '480px',
              minHeight: '540px',
              boxShadow: 'none',
            },
          }}
        >
          <DishOrderCard dishId={dish.id} closeModalHandler={onClose} />
        </AppModal>
      )}
    </>
  );
};

UserOrderItem.propTypes = UserOrderItemPropTypes;
export default UserOrderItem;
