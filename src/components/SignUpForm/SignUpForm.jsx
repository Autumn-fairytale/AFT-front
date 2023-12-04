import { useState } from 'react';
import { useForm, useFormState, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Alert } from '@mui/material';

import { signUp } from '@/redux/auth/operations';
import { selectAuthLoading } from '@/redux/auth/selectors';
import signUpSchema from '@/schemas/signUpSchema';
import {
  EmailController,
  FirstNameController,
  LastNameController,
  PasswordController,
  SignUpFooter,
  SignUpHeader,
  SignUpSubmitButton,
} from '@/shared/AuthFormComponents/readyComponents';
import { FormWrapperStyled } from '@/shared/AuthFormComponents/styles';
import { getError, useIsSameData } from '@/shared/AuthFormComponents/utils';
import { useTheme } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { PasswordHints, PrivacyPolicies, useShowPasswordHints } from './utils';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SigUpForm = () => {
  const [formError, setFormError] = useState(''); // an error from server that is shown in alert
  const isLoading = useSelector(selectAuthLoading);
  const theme = useTheme();
  const isSameData = useIsSameData(); // did user change field data after unsuccessful submission?

  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues,
  });

  const passwordValue = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  });

  const { errors } = useFormState({ control });
  const showPasswordHints = useShowPasswordHints(errors); // show password hints

  const onSubmit = async (data) => {
    if (isSameData(data)) return;

    await dispatch(signUp(data))
      .unwrap()
      .then(() => {
        reset();
        setFormError('');
        toast.success('You have successfully signed up');
      })
      .catch((error) => {
        const errorText = getError(error.message);
        toast.error(errorText);
        setFormError(errorText);
      });
  };

  return (
    <FormWrapperStyled className="sign-up-form" theme={theme}>
      <SignUpHeader />
      <form className="sign-up-form__form" onSubmit={handleSubmit(onSubmit)}>
        <FirstNameController
          control={control}
          errors={errors}
          className="sign-up-form__input"
        />
        <LastNameController
          control={control}
          errors={errors}
          className="sign-up-form__input"
        />
        <EmailController
          control={control}
          errors={errors}
          className="sign-up-form__input"
        />
        <PasswordController
          control={control}
          errors={errors}
          className="sign-up-form__input"
          autoComplete="new-password"
        />
        <PasswordHints
          passwordValue={passwordValue}
          showHints={showPasswordHints}
        />
        {/* error from server if password rules aren't shown */}
        {formError && !showPasswordHints && (
          <Alert severity="error">{formError}</Alert>
        )}
        {!showPasswordHints && <PrivacyPolicies />}
        <SignUpSubmitButton isLoading={isLoading} />
        <SignUpFooter /> {/* redirect to Sign In page */}
      </form>
    </FormWrapperStyled>
  );
};

export default SigUpForm;
