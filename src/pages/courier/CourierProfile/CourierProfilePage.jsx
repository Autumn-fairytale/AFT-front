import CreateCourierForm from '@/components/CreateCourierForm/CreateCourierForm';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CourierProfilePage = () => {
  return (
    <Main>
      <AppContainer>
        <PageTitle>COURIER PROFILE</PageTitle>
        <CreateCourierForm />
      </AppContainer>
    </Main>
  );
};

export default CourierProfilePage;
