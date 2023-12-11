import { UploadChefFiles } from '@/components/CreateChefForm/UploadChefFiles/UploadChefFiles';
import { FOLDERS } from '@/constants/mocks';
import { UserAccountAvatarPropTypes } from './UserAccountAvatar.props';
import { UserAvatarBoxStyled } from './UserAccountAvatar.styled';

const UserAccountAvatar = ({ control, setValue, initialImage }) => {
  return (
    <UserAvatarBoxStyled>
      <UploadChefFiles
        control={control}
        setValue={setValue}
        isAvatar={true}
        id="avatar"
        initialImage={initialImage}
        folder={FOLDERS.AVATARS}
      />
    </UserAvatarBoxStyled>
  );
};

UserAccountAvatar.propTypes = UserAccountAvatarPropTypes;

export default UserAccountAvatar;
