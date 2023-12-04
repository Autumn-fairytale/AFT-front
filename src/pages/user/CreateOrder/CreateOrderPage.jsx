import CreateOrderForm from '@/components/CreateOrderForm';
import FetchError from '@/components/FetchError';
import NoData from '@/components/NoData';
import { useGetCartItems } from '@/hooks';
import { AppLoader } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { CreateOrderPageContainer } from './CreateOrderPage.styled';

const CreateOrderPage = () => {
  const { data, isLoading, error } = useGetCartItems();
  let render = null;

  if (isLoading) {
    render = <AppLoader />;
  } else if (error) {
    render = <FetchError message={error.message} />;
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
      <CreateOrderPageContainer>{render}</CreateOrderPageContainer>
    </Main>
  );
};

export default CreateOrderPage;
