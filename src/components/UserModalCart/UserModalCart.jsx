import { ModalProvider } from '@/contexts/useModalContext';
import { AppModal } from '@/shared';
import ModalContent from './ModalContent/ModalContent';
import { UserModalCartPropTypes } from './UserModalCart.props';
import { modalStyles } from './UserModalCart.styled';

const UserModalCart = ({ isOpen, closeModal }) => {
  return (
    <AppModal
      onClose={closeModal}
      isOpen={isOpen}
      contentProps={{ style: modalStyles }}
    >
      <ModalProvider closeModal={closeModal}>
        <ModalContent />
      </ModalProvider>
    </AppModal>
  );
};

UserModalCart.propTypes = UserModalCartPropTypes;

export default UserModalCart;
