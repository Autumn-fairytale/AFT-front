import CreateChefForm from '@/components/CreateChefForm/CreateChefForm';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const ChefProfilePage = () => {
  return (
    <Main>
      <AppContainer>
        <PageTitle>CHEF PROFILE</PageTitle>
        <CreateChefForm />
      </AppContainer>
    </Main>
  );
};

export default ChefProfilePage;
