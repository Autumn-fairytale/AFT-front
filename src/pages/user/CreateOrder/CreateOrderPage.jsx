import CreateOrderForm from '@/components/CreateOrderForm';
import NoData from '@/components/NoData';
import { useGetCartItems } from '@/hooks';
import { AppContainer, AppLoader } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CreateOrderPage = () => {
  const { data, isLoading, error } = useGetCartItems();
  let render = null;

  if (isLoading) {
    render = <AppLoader />;
  } else if (error) {
    render = 'Error';
  } else if (data?.success) {
    render =
      data.cart.items.length > 0 ? (
        <CreateOrderForm data={data.cart} />
      ) : (
        <NoData message="Oops! No products were found in the cart!" />
      );
  }
  return (
    <Main>
      <AppContainer
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}
      >
        {render}
      </AppContainer>
    </Main>
  );
};

export default CreateOrderPage;
