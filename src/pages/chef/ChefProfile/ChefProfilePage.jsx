import CreateChefForm from '@/components/CreateChefForm/CreateChefForm';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const ChefProfilePage = () => {
  return (
    <Main>
      <AppContainer>
        <CreateChefForm />
      </AppContainer>
    </Main>
  );
};

export default ChefProfilePage;
