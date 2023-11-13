import { AiOutlineCloseCircle } from 'react-icons/ai';

import Modal from '@mui/material/Modal';

import PropTypes from 'prop-types';

import { BoxStyled, IconButtonStyled } from './Modal.styled';

export default function AppWindow({ handleClose, children, open }) {
  return (
    <Modal keepMounted open={open} onClose={handleClose}>
      <BoxStyled>
        <IconButtonStyled
          aria-label="delete"
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

AppWindow.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.isRequired,
};
