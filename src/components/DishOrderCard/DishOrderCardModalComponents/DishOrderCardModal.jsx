import { useDispatch } from 'react-redux';

import { openUserCart } from '@/redux/cartStatus/slice';
import { AppModal } from '@/shared';
import DishOrderCard from '../DishOrderCard';
import { DishOrderCardModalProps } from './DishOrderCardModal.props';
export const DishOrderCardModal = ({
  dishId,
  isModalOpen,
  closeModalHandler,
}) => {
  const dispatch = useDispatch();

  const handleGoToCart = () => {
    dispatch(openUserCart());
    closeModalHandler();
  };

  return (
    isModalOpen && (
      <AppModal
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        contentProps={{
          style: {
            backgroundColor: 'transparent',
            border: 'none',
            minWidth: '480px',
            minHeight: '540px',
          },
        }}
      >
        <DishOrderCard dishId={dishId} handleGoToCart={handleGoToCart} />
      </AppModal>
    )
  );
};

DishOrderCardModal.propTypes = DishOrderCardModalProps;
