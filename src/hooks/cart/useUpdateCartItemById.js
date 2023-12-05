import { useSelector } from 'react-redux';

import { updateCartItemById } from '@/api';
import { selectUser } from '@/redux/auth/selectors';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCartOptimisticUpdate } from './useCartOptimisticUpdate';

export const useUpdateCartItemById = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();
  const optimisticUpdate = useCartOptimisticUpdate();
  const key = ['cart', userId];

  const result = useMutation({
    mutationFn: (data) => updateCartItemById(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
    onMutate: (cart) => {
      const previousCart = queryClient.getQueryData(key);

      optimisticUpdate(cart.item.dishId, cart.item.count);

      return { previousCart };
    },
    onError: (error, cart, ctx) => {
      if (!ctx) return;

      queryClient.setQueryData(key, ctx.previousCart);
    },
  });

  return result;
};
