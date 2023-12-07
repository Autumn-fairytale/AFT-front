import { useLocation, useNavigate } from 'react-router-dom';

import PageMessage from '@/components/PageMessage';
import { route } from '@/constants';
import { useModalContext } from '@/contexts/useModalContext';
import { AppButton } from '@/shared';

const EmptyCart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isNotDishesRoute = location.pathname !== route.DISHES;

  const { closeModal } = useModalContext();

  const handleSearchDishClick = () => {
    navigate(route.DISHES);
    closeModal();
  };

  return (
    <>
      <PageMessage
        variant="no-data"
        message="Oops! No products were found in the cart!"
        sx={{ padding: '1rem', paddingBottom: '2rem' }}
        imageProps={{ width: '300px', height: '300px' }}
        messageProps={{ style: { fontWeight: '600' } }}
      />
      {isNotDishesRoute && (
        <AppButton
          style={{ marginBottom: '2rem' }}
          label="Search for a dish"
          onClick={handleSearchDishClick}
        />
      )}
    </>
  );
};

// EmptyCart.propTypes = {
//   closeModal: PropTypes.func.isRequired,
// };

export default EmptyCart;
