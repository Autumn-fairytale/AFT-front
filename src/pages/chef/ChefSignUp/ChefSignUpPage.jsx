import CreateChefForm from '@/components/CreateChefForm/CreateChefForm';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const ChefSignUpPage = () => {
  return (
    <Main>
      <AppContainer>
        <PageTitle>SIGN-UP CHEF</PageTitle>
        <CreateChefForm />
      </AppContainer>
    </Main>
  );
};

export default ChefSignUpPage;
