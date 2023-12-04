import { useSelector } from 'react-redux';

import { updateCartItemById } from '@/api';
import { selectUser } from '@/redux/auth/selectors';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateCartItemById = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: (data) => updateCartItemById(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', userId] });
    },
  });

  return result;
};
