import { AddDishForm } from '@/components/AddDishForm';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const ChefCreateDishPage = () => {
  return (
    <>
      <Main>
        <AppContainer>
          <PageTitle>CREATE DISH</PageTitle>
          <AddDishForm />
        </AppContainer>
      </Main>
    </>
  );
};

export default ChefCreateDishPage;
