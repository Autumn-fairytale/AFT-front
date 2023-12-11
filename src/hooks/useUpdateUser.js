import { useSelector } from 'react-redux';

import { updateUser } from '@/api/updateUser';
import { selectUser } from '@/redux/auth/selectors';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateUser = () => {
  const userId = useSelector(selectUser)?.id;
  const queryClient = useQueryClient();
  const key = ['user', userId];

  const result = useMutation({
    mutationFn: (data) => updateUser(data, userId),
    onSuccess: () => {
      queryClient.setQueryData(key, null);
    },
  });

  return result;
};
