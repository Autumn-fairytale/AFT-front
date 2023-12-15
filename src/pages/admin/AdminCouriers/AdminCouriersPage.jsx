import { AdminCourierTable } from '@/components/AdminCourierTable.jsx/AdminCourierTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const AdminCouriersPage = () => {
  return (
    <Main>
      <AppContainer>
        <PageTitle>MANAGE COURIERS</PageTitle>
        <AdminCourierTable />
      </AppContainer>
    </Main>
  );
};

export default AdminCouriersPage;
