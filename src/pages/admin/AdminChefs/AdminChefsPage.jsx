import { AdminChefTable } from '@/components/AdminChefTable/AdminChefTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const AdminChefsPage = () => {
  return (
    <Main>
      <AppContainer>
        <PageTitle>CHEFS</PageTitle>
        <p>Table chefs</p>
        <AdminChefTable />
      </AppContainer>
    </Main>
  );
};

export default AdminChefsPage;
