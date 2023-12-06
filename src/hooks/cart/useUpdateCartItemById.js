import { useSelector } from 'react-redux';

import { updateCartItemById } from '@/api';
import { queryKey } from '@/constants';
import { selectUser } from '@/redux/auth/selectors';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCartOptimisticUpdate } from './useCartOptimisticUpdate';

export const useUpdateCartItemById = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();
  const optimisticUpdate = useCartOptimisticUpdate();
  const key = [queryKey.CART, userId];
  const backupKey = [...key, queryKey.BACKUP];

  const result = useMutation({
    mutationFn: (data) => updateCartItemById(userId, data),
    onSuccess: () => {
      queryClient.setQueryData(backupKey, null);
      queryClient.invalidateQueries({ queryKey: key });
    },
    onMutate: (cart) => {
      const previousCart = queryClient.getQueryData(backupKey) || cart;

      optimisticUpdate(cart.item.dishId, cart.item.count);

      return { previousCart };
    },
    onError: (_error, _cart, ctx) => {
      if (!ctx) return;

      queryClient.setQueryData(key, ctx.previousCart);
    },
  });

  return result;
};
