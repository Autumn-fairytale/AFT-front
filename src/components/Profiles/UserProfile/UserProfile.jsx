import UserAccountAvatar from './Avatar/UserAccountAvatar';
import UserAccountButtons from './Buttons/UserAccountButtons';
import UserAccountFields from './Fields/UserAccountFields';
import { UserAccountGridStyled } from './UserProfile.styles';

const UserProfile = () => {
  return (
    <UserAccountGridStyled>
      <UserAccountAvatar></UserAccountAvatar>
      <UserAccountFields></UserAccountFields>
      <UserAccountButtons></UserAccountButtons>
    </UserAccountGridStyled>
  );
};

export default UserProfile;
