import CreateOrderForm from '@/components/CreateOrderForm';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CreateOrderPage = () => {
  return (
    <Main>
      <AppContainer>
        <CreateOrderForm />
      </AppContainer>
    </Main>
  );
};

export default CreateOrderPage;
