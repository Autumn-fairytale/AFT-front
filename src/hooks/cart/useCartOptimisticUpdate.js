import { useSelector } from 'react-redux';

import { queryKey } from '@/constants';
import { selectUser } from '@/redux/auth/selectors';
import { useQueryClient } from '@tanstack/react-query';

export const useCartOptimisticUpdate = () => {
  const queryClient = useQueryClient();
  const userId = useSelector(selectUser)?.id;
  const key = [queryKey.CART, userId];

  return (dishId, count) => {
    queryClient.setQueryData(key, (prevCart) => {
      const prevItems = prevCart.cart.items;
      const items =
        count <= 0
          ? prevItems.filter((item) => item.dish.id !== dishId)
          : prevItems.map((item) =>
              item.dish.id === dishId ? { ...item, count } : item
            );

      return {
        ...prevCart,
        cart: {
          ...prevCart.cart,
          items,
        },
      };
    });
  };
};
