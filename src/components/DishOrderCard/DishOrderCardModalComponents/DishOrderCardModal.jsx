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
    closeModalHandler();
    dispatch(openUserCart());
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
            boxShadow: 'none',
          },
        }}
      >
        <DishOrderCard
          dishId={dishId}
          handleGoToCart={handleGoToCart}
          closeModalHandler={closeModalHandler}
        />
      </AppModal>
    )
  );
};

DishOrderCardModal.propTypes = DishOrderCardModalProps;
