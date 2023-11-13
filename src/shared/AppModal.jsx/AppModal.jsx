import { AiOutlineCloseCircle } from 'react-icons/ai';

import Modal from '@mui/material/Modal';

import { AppModalProps } from './AppModal.props';
import { BoxStyled, IconButtonStyled } from './Modal.styled';

/**
 * AppModal component for rendering a AppModal window.
 *
 * @component
 * @param {function} handleClose - The callback function to handle modal close.
 * @param {boolean} open - A boolean indicating whether the modal is open or closed.
 * @param {React.ReactNode} children - The content to be displayed within the modal.
 * @returns {JSX.Element}
 */

export const AppModal = ({ handleClose, children, open }) => {
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
};

AppModal.propTypes = AppModalProps;
