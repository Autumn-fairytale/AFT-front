import { useTheme } from '@emotion/react';
import { ReusedFormHeader } from '../reusableComponents';

// HEADER OF SIGN IN FORM
export const SignInHeader = () => {
  const theme = useTheme();
  return (
    <ReusedFormHeader
      title="SIGN IN"
      subtitle="to your account on IDLO"
      className="sign-in-form__subtitle"
      theme={theme}
    />
  );
};

// HEADER OF SIGN UP FORM
export const SignUpHeader = () => {
  const theme = useTheme();
  return (
    <ReusedFormHeader
      title="SIGN UP"
      subtitle="to create your account on IDLO"
      className="sign-up-form__subtitle"
      theme={theme}
    />
  );
};
