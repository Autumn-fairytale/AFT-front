import { AppModal } from '@/shared';
import DishOrderCard from '../DishOrderCard';
import { DishOrderCardModalProps } from './DishOrderCardModal.props';

export const DishOrderCardModal = ({
  dishId,
  isModalOpen,
  closeModalHandler,
}) => {
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
        <DishOrderCard dishId={dishId} />
      </AppModal>
    )
  );
};

DishOrderCardModal.propTypes = DishOrderCardModalProps;
