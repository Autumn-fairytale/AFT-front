import { useSelector } from 'react-redux';

import { deleteCartItem } from '@/api';
import { selectUser } from '@/redux/auth/selectors';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteCartItem = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: (dishId) => deleteCartItem(userId, dishId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', userId] });
    },
  });

  return result;
};
