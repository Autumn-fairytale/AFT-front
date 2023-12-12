import CreateCourierForm from '@/components/CreateCourierForm/CreateCourierForm';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CourierSignUpPage = () => {
  return (
    <Main>
      <AppContainer>
        <PageTitle>SIGN-UP COURIER</PageTitle>
        <CreateCourierForm />
      </AppContainer>
    </Main>
  );
};

export default CourierSignUpPage;
