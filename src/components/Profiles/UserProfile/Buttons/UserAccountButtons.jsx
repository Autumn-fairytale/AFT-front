import { useNavigate } from 'react-router-dom';

import { AppButton } from '@/shared';
import {
  UserButtonsBoxStyled,
  UserButtonsGroupStyled,
} from './UserAccountButtons.styled';
import { useRedirectButtons } from './useRedirectButtons';

const UserAccountButtons = () => {
  const navigate = useNavigate();
  const { redirectButtons } = useRedirectButtons();

  return (
    <UserButtonsBoxStyled>
      <UserButtonsGroupStyled>
        {redirectButtons.map(({ label, route }) => (
          <AppButton
            key={label}
            fullWidth
            variant="outlined"
            label={label}
            onClick={() => navigate(route)}
          />
        ))}
      </UserButtonsGroupStyled>
    </UserButtonsBoxStyled>
  );
};

export default UserAccountButtons;
