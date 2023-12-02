import { useState } from 'react';
import { Controller, useForm, useFormState } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Alert } from '@mui/material';

import { route } from '@/constants';
import { signIn } from '@/redux/auth/operations';
import { selectAuthLoading } from '@/redux/auth/selectors';
import singInSchema from '@/schemas/singInSchema';
import { AppButton, AppPasswordInput, AppTextInput } from '@/shared';
import { useTheme } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormWrapperStyled,
  RedirectLinkStyled,
  submitButtonStyles,
  SubtitleStyled,
  TitleStyled,
  UnderButtonTextStyled,
} from './SignInForm.styled';
import { getError, LabelOrLoader, useIsSameData } from './utils';

const defaultValues = {
  email: '',
  password: '',
};

const SigInForm = () => {
  const [formError, setFormError] = useState('');
  const isLoading = useSelector(selectAuthLoading);
  const theme = useTheme();
  const isSameData = useIsSameData();

  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(singInSchema),
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
        toast.success('You have successfully signed in');
      })
      .catch((error) => {
        const errorText = getError(error.message);
        toast.error(errorText);
        setFormError(errorText);
      });
  };

  return (
    <FormWrapperStyled className="sign-in-form" theme={theme}>
      <TitleStyled variant="h4">SIGN IN</TitleStyled>
      <SubtitleStyled
        theme={theme}
        variant="subtitle1"
        className="sign-in-form__subtitle"
      >
        to your account on IDLO
      </SubtitleStyled>

      <form className="sign-in-form__form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <AppTextInput
              label="Email"
              placeholder="e.g., email@example.com"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              margin="normal"
              className="sign-in-form__input"
              error={!!errors.email?.message}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <AppPasswordInput
              placeholder="e.g., p@ssWord_1"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              margin="normal"
              className="sign-in-form__input"
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            />
          )}
        />
        {formError && <Alert severity="error">{formError}</Alert>}

        <AppButton
          type="submit"
          label={<LabelOrLoader isLoading={isLoading} />}
          variant="contained"
          disableElevation={true}
          sx={{ ...submitButtonStyles }}
        />
      </form>

      <div className="sign-in-form__footer">
        <UnderButtonTextStyled variant="subtitle1" component="span">
          Don`t have an account?
        </UnderButtonTextStyled>
        <RedirectLinkStyled href={route.SIGN_UP} underline="hover">
          Sign Up
        </RedirectLinkStyled>
      </div>
    </FormWrapperStyled>
  );
};

export default SigInForm;
