import { MdLaunch } from 'react-icons/md';

import { IconButton } from '@mui/material';

import { useModal } from '@/hooks';
import { AppModal } from '@/shared';
import { UserOrderDetails } from '../UserOrderDetails';
import { UserOrderDetailsButtonPropTypes } from './UserOrderDetailsButton.props';

const UserOrderDetailsButton = ({ data, ...props }) => {
  const { isOpen, onClose, openModal } = useModal();
  return (
    <>
      <IconButton sx={{ color: 'primary.main' }} onClick={openModal} {...props}>
        <MdLaunch />
      </IconButton>
      {isOpen && (
        <AppModal
          isOpen={isOpen}
          onClose={onClose}
          contentProps={{
            style: {
              minWidth: '480px',
              minHeight: '540px',
              padding: 0,

              overflow: 'hidden',

              boxShadow: 'none',
              border: 'none',
            },
          }}
        >
          <UserOrderDetails order={data} />
        </AppModal>
      )}
    </>
  );
};

UserOrderDetailsButton.propTypes = UserOrderDetailsButtonPropTypes;

export default UserOrderDetailsButton;
