import UserProfile from '@/components/Profiles/UserProfile';
import { UserPageWrapperStyled } from './UserAccountPage.styled';

const UserAccountPage = () => {
  return (
    <UserPageWrapperStyled>
      <UserProfile />
    </UserPageWrapperStyled>
  );
};

export default UserAccountPage;
