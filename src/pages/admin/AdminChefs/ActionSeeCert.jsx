import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import { useModal } from '@/hooks';
import { AppModal } from '@/shared';
import { ActionSeeProps } from './ActionSeeCert.props';
import { ButtonWrapper, IconButtonStyled } from './AdminChef.styled';

export const ActionSeeCert = ({ params }) => {
  console.log('params:', params);
  const { isOpen, openModal, onClose } = useModal();
  return (
    <>
      <ButtonWrapper>
        <IconButtonStyled onClick={openModal}>
          <CardGiftcardIcon />
        </IconButtonStyled>
      </ButtonWrapper>

      <AppModal onClose={onClose} isOpen={isOpen}>
        <img src={params.row.certificate} width={500} />
      </AppModal>
    </>
  );
};

ActionSeeCert.propTypes = ActionSeeProps;
