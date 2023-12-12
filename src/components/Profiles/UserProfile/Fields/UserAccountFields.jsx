import { useEffect } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useUpdateUser } from '@/hooks/useUpdateUser';
import { selectUser } from '@/redux/auth/selectors';
import { updateUserSchema } from '@/schemas';
import { getError, useIsSameData } from '@/shared/AuthFormComponents/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EditAccountButtonStyled,
  UserFieldsBoxStyled,
} from './UserAccountFields.styled';
import UserData from './UserData/UserData';
import { comparePasswords } from './utils/comparePasswords';
import { getUserDefaultValues } from './utils/formDefaultValues';
import { convertPhoneNumber } from './utils/patterns';

const UserAccountFields = () => {
  const user = useSelector(selectUser);
  const isSameData = useIsSameData();
  const isSameAddress = useIsSameData();
  const { handleSubmit, setValue, control, setError, reset } = useForm({
    resolver: zodResolver(updateUserSchema),
    defaultValues: getUserDefaultValues(user),
  });
  const { isDirty, errors, isValid } = useFormState({ control });
  const { mutate: updateUser, error: serverError, data } = useUpdateUser();

  //
  const onSubmit = (newUserData) => {
    const { address, ...mainData } = newUserData;
    if (isSameData(mainData)) {
      // check to avoid the same request after error
      if (isSameAddress(address)) return;
    }

    const { phoneNumber, currentPassword, newPassword } = newUserData;
    newUserData.phoneNumber = convertPhoneNumber(phoneNumber); // transform number to backend schema
    // check for password changing
    const passwordErrorObj = comparePasswords({
      newPassword,
      currentPassword,
      setError,
    });

    if (passwordErrorObj.status) {
      toast.error(passwordErrorObj.message);
    } else {
      updateUser(newUserData);
    }
  };

  // update default values after success request
  useEffect(() => {
    reset(getUserDefaultValues(user));
  }, [user, reset]);

  useEffect(() => {
    if (serverError) {
      const errorText = getError(serverError?.statusCode, 'updateUser');
      toast.error(errorText);
    }
    if (data?.success && isValid) {
      toast.success('User info successfully updated');
      setValue('currentPassword', '');
      setValue('newPassword', '');
    }
  }, [serverError, data]);

  return (
    <UserFieldsBoxStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserData
          control={control}
          errors={errors}
          setValue={setValue}
          setError={setError}
          initialImage={user?.avatar || ''}
        />
        <EditAccountButtonStyled
          label="Save changes"
          disabled={!isDirty}
          type="submit"
        />
      </form>
    </UserFieldsBoxStyled>
  );
};

export default UserAccountFields;
