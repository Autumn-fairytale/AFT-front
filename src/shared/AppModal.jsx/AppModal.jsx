import { AiOutlineCloseCircle } from 'react-icons/ai';

import Modal from '@mui/material/Modal';

import { AppModalProps } from './AppModal.props';
import { BoxStyled, IconButtonStyled } from './Modal.styled';

export default function AppModal({ handleClose, children, open }) {
  return (
    <Modal keepMounted open={open} onClose={handleClose}>
      <BoxStyled>
        <IconButtonStyled
          aria-label="close"
          color="secondary"
          onClick={handleClose}
          size="large"
        >
          <AiOutlineCloseCircle fontSize="50" />
        </IconButtonStyled>
        {children}
      </BoxStyled>
    </Modal>
  );
}

AppModal.propTypes = AppModalProps;
