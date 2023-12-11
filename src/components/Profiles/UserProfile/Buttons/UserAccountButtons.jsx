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

  const handleButtonClick = (route, onClick) => {
    if (route) {
      navigate(route);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <UserButtonsBoxStyled>
      <UserButtonsGroupStyled>
        {redirectButtons.map(({ label, route, onClick }) => (
          <AppButton
            key={label}
            fullWidth
            variant="outlined"
            label={label}
            onClick={() => handleButtonClick(route, onClick)}
          />
        ))}
      </UserButtonsGroupStyled>
    </UserButtonsBoxStyled>
  );
};

export default UserAccountButtons;
