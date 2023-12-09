import CreateCourierForm from '@/components/CreateCourierForm/CreateCourierForm';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CourierSignUpPage = () => {
  return (
    <Main>
      <AppContainer>
        <CreateCourierForm />
      </AppContainer>
    </Main>
  );
};

export default CourierSignUpPage;
