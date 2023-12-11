import { useEffect } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { useUpdateUser } from '@/hooks/useUpdateUser';
import { getCurrentUser } from '@/redux/auth/operations';
import { selectUser } from '@/redux/auth/selectors';
import { updateUserSchema } from '@/schemas';
import { getError, useIsSameData } from '@/shared/AuthFormComponents/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EditAccountButtonStyled,
  UserFieldsBoxStyled,
} from './UserAccountFields.styled';
import UserData from './UserData/UserData';
import { getUserDefaultValues } from './utils/formDefaultValues';
import { convertPhoneNumber } from './utils/patterns';

const UserAccountFields = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const isSameData = useIsSameData();

  const { handleSubmit, setValue, control, setError } = useForm({
    resolver: zodResolver(updateUserSchema),
    defaultValues: getUserDefaultValues(user),
  });

  const { isDirty, errors, isValid } = useFormState({ control });

  const comparePasswords = (data) => {
    let passwordErrorObj = { status: false, message: '' };
    const passwordErrors = {
      current: 'Current password is required',
      new: 'New password is required',
      same: 'The new password must be different from current one',
    };
    if (data.newPassword && !data.currentPassword) {
      passwordErrorObj = { status: true, message: passwordErrors.current };
      setError('currentPassword', {
        type: 'custom',
        message: passwordErrors.current,
      });
    }

    if (!data.newPassword && data.currentPassword) {
      passwordErrorObj = { status: true, message: passwordErrors.new };
      setError('newPassword', {
        type: 'custom',
        message: passwordErrors.new,
      });
    }

    if (
      data.newPassword &&
      data.currentPassword &&
      data.newPassword === data.currentPassword
    ) {
      passwordErrorObj = { status: true, message: passwordErrors.same };
      setError('newPassword', {
        type: 'custom',
        message: passwordErrors.same,
      });
    }
    return passwordErrorObj;
  };

  const { mutate: updateUser, error: serverError, data } = useUpdateUser();

  const onSubmit = (updatedUser) => {
    if (isSameData(updatedUser)) return;

    updatedUser.phoneNumber = convertPhoneNumber(updatedUser.phoneNumber);
    const passwordErrorObj = comparePasswords(updatedUser);

    if (passwordErrorObj.status) {
      toast.error(passwordErrorObj.message);
    } else {
      updateUser(updatedUser);
    }
  };

  useEffect(() => {
    if (serverError) {
      const errorText = getError(serverError?.statusCode, 'updateUser');
      toast.error(errorText);
      // setFormError(errorText);
    }
    if (data?.success && isValid) {
      toast.success('User info successfully updated');
      setValue('currentPassword', '');
      setValue('newPassword', '');
      dispatch(getCurrentUser());
    }
  }, [serverError, data]);

  return (
    <UserFieldsBoxStyled>
      <form onSubmit={handleSubmit(onSubmit)} className="user-data-form__form">
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
