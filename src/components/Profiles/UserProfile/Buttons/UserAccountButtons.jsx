// import { useNavigate } from 'react-router-dom';

// import { route } from '@/constants';
import { AppButton } from '@/shared';
import {
  UserButtonsBoxStyled,
  UserButtonsGroupStyled,
} from './UserAccountButtons.styled';

const UserAccountButtons = () => {
  // const navigate = useNavigate();

  // const conditionRedirect = (firstRoute, secondRoute, condition) => {
  //   if (condition) {
  //     navigate(firstRoute);
  //   } else {
  //     navigate(secondRoute);
  //   }
  // };

  // const redirectFunc = {
  //   chefProfile: conditionRedirect(route.CHEF_PROFILE),
  // };

  return (
    <UserButtonsBoxStyled>
      <UserButtonsGroupStyled>
        <AppButton
          fullWidth
          // onClick={}
          variant="outlined"
          label="Chef Account"
        ></AppButton>
        <AppButton
          fullWidth
          variant="outlined"
          label="Become a Courier"
        ></AppButton>
        <AppButton
          fullWidth
          variant="outlined"
          label="Order History"
        ></AppButton>
        <AppButton
          fullWidth
          variant="outlined"
          label="Notifications"
        ></AppButton>
        <AppButton fullWidth variant="outlined" label="Settings"></AppButton>
      </UserButtonsGroupStyled>
    </UserButtonsBoxStyled>
  );
};

export default UserAccountButtons;
