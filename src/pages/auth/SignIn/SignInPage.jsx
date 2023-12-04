import styled from '@mui/system/styled';

import SignInForm from '@/components/SignInForm';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const navBarHeight = '64px';
const footerHeight = '89px';
export const SignUpContainerStyled = styled(AppContainer)({
  display: 'grid',
  placeItems: 'center',
  height: `calc(100vh - ${navBarHeight} - ${footerHeight})`,
});

const SignInPage = () => {
  return (
    <Main>
      <SignUpContainerStyled>
        <SignInForm />
      </SignUpContainerStyled>
    </Main>
  );
};

export default SignInPage;
