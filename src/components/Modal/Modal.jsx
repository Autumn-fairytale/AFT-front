import * as React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { IconButton, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

export default function ModalWindow() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    maxWidth: 500,

    bgcolor: 'background.paper',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  const iconButtonStyle = {
    position: 'absolute',
    top: 10,
    right: 10,
    p: 0,
    backgroundColor: 'transparent',
    color: 'primary',
    borderRadius: '50%',
    transition: 'color 250ms linear',
    '&:hover': {
      color: `${theme.palette.primary.main}`,
    },
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          Modal
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={handleClose}
            size="small"
            sx={iconButtonStyle}
          >
            <AiOutlineCloseCircle fontSize="40" />
          </IconButton>
        </Box>
      </Modal>
    </>
  );
}
