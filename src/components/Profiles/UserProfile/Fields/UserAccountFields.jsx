import { useForm } from 'react-hook-form';

import { UserFieldsBoxStyled } from './UserAccountFields.styled';
import UserData from './UserData/UserData';

const UserAccountFields = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <UserFieldsBoxStyled>
      <form
        onSubmit={() => console.log('submit user form')}
        className="user-data-form__form"
      >
        <UserData control={control} errors={errors} />
      </form>
    </UserFieldsBoxStyled>
  );
};

export default UserAccountFields;
