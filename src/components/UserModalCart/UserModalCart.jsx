import { useDispatch, useSelector } from 'react-redux';

import { useDisableToasts } from '@/hooks';
import { selectIsHidden, selectIsOpen } from '@/redux/cartStatus/selectors';
import { closeUserCart } from '@/redux/cartStatus/slice';
import { AppModal } from '@/shared';
import ModalContent from './ModalContent/ModalContent';
import { modalStyles } from './UserModalCart.styled';

const UserModalCart = () => {
  useDisableToasts();
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const isHidden = useSelector(selectIsHidden);

  const onClose = () => {
    dispatch(closeUserCart());
  };

  return (
    <AppModal
      isOpen={isOpen}
      onClose={onClose}
      contentProps={{ style: { ...modalStyles, opacity: isHidden ? 0 : 1 } }}
    >
      <ModalContent />
    </AppModal>
  );
};

export default UserModalCart;
