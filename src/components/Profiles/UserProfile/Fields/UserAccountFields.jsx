import { useForm } from 'react-hook-form';

import {
  EditAccountButtonStyled,
  UserFieldsBoxStyled,
} from './UserAccountFields.styled';
import UserData from './UserData/UserData';

const UserAccountFields = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <UserFieldsBoxStyled>
      <form
        onSubmit={(data) => console.log(data)}
        className="user-data-form__form"
      >
        <UserData control={control} errors={errors} />
        <EditAccountButtonStyled label="Edit" />
      </form>
    </UserFieldsBoxStyled>
  );
};

export default UserAccountFields;
