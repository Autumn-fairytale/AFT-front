import { useSelector } from 'react-redux';

import { addCartItem } from '@/api';
import { queryKey } from '@/constants';
import { selectUser } from '@/redux/auth/selectors';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddCartItem = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();
  const key = [queryKey.CART, userId];

  const result = useMutation({
    mutationFn: (data) => addCartItem(userId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
  });

  return result;
};
