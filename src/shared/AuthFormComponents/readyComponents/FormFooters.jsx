import { route } from '@/constants';
import { ReusedFormFooter } from '../reusableComponents';

// FOOTER UNDER SIGN IN BUTTON
export const SignInFooter = () => {
  return (
    <ReusedFormFooter
      className="sign-in-form__footer"
      helperText="Don`t have an account?"
      route={route.SIGN_UP}
      redirectButtonText="Sign Up"
    />
  );
};

// FOOTER UNDER SIGN UP BUTTON
export const SignUpFooter = () => {
  return (
    <ReusedFormFooter
      className="sign-up-form__footer"
      helperText="Already have an account?"
      route={route.SIGN_IN}
      redirectButtonText="Sign In"
    />
  );
};
