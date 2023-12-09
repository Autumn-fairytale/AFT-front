import UserAccountAvatar from './Avatar/UserAccountAvatar';
import UserAccountButtons from './Buttons/UserAccountButtons';
import UserAccountFields from './Fields/UserAccountFields';
import { UserAccountGridStyled } from './UserProfile.styled';

const UserProfile = () => {
  return (
    <UserAccountGridStyled>
      <UserAccountAvatar />
      <UserAccountFields />
      <UserAccountButtons />
    </UserAccountGridStyled>
  );
};

export default UserProfile;
