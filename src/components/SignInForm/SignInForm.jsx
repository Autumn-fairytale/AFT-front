import { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Alert } from '@mui/material';

import { signIn } from '@/redux/auth/operations';
import { selectAuthLoading } from '@/redux/auth/selectors';
import signInSchema from '@/schemas/signInSchema';
import {
  EmailController,
  PasswordController,
  SignInFooter,
  SignInHeader,
  SignInSubmitButton,
} from '@/shared/AuthFormComponents/readyComponents';
import { FormWrapperStyled } from '@/shared/AuthFormComponents/styles';
import { getError, useIsSameData } from '@/shared/AuthFormComponents/utils';
import { useTheme } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';

const defaultValues = {
  email: '',
  password: '',
};

const SigInForm = () => {
  const [formError, setFormError] = useState(''); // an error from server that is shown in alert
  const isLoading = useSelector(selectAuthLoading);
  const theme = useTheme();
  const isSameData = useIsSameData(); // did the user change field data after unsuccessful submission?

  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues,
  });
  const { errors } = useFormState({ control });

  const onSubmit = async (data) => {
    if (isSameData(data)) return;

    await dispatch(signIn(data))
      .unwrap()
      .then(() => {
        reset();
        setFormError('');
        // toast.success('You have successfully signed in');
      })
      .catch((error) => {
        const errorText = getError(error.message);
        toast.error(errorText);
        setFormError(errorText);
      });
  };

  return (
    <FormWrapperStyled className="sign-in-form" theme={theme}>
      <SignInHeader />
      <form className="sign-in-form__form" onSubmit={handleSubmit(onSubmit)}>
        <EmailController
          control={control}
          errors={errors}
          className="sign-in-form__input"
        />
        <PasswordController
          control={control}
          errors={errors}
          className="sign-in-form__input"
          autoComplete="current-password"
        />
        {/* error from server */}
        {formError && <Alert severity="error">{formError}</Alert>}{' '}
        <SignInSubmitButton isLoading={isLoading} />
        {/* redirect to Sign Up page */}
        <SignInFooter />
      </form>
    </FormWrapperStyled>
  );
};

export default SigInForm;
