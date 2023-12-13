/* eslint-disable react/prop-types */
import { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';

import { updateChefAccountStatus } from '@/api/chef/updateChefAccountStatus';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const ChefsActions = ({ params }) => {
  const [checked, setChecked] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  console.log('isLoading:', isLoading);

  const queryClient = useQueryClient();

  const { mutate: updateChefStatusMutate } = useMutation({
    mutationFn: ([accountStatus, id]) =>
      updateChefAccountStatus(accountStatus, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chefs', 'admin'] });
    },
  });

  const handleStatusChange = async (id, newStatus) => {
    setIsLoading(true);

    try {
      await updateChefStatusMutate([{ accountStatus: newStatus }, id]);
    } catch (error) {
      console.error('Error deleting review:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const accountStatus = params.row.accountStatus;

  return (
    <>
      {accountStatus !== 'verified' &&
        accountStatus !== 'blocked' &&
        accountStatus !== 'rejected' && (
          <>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              disabled={isLoading}
            />
            <button
              onClick={() =>
                handleStatusChange(params.id, checked ? 'verified' : 'rejected')
              }
              disabled={isLoading}
            >
              {checked ? 'Verify' : 'Reject'}
            </button>
          </>
        )}
      {accountStatus === 'rejected' && (
        <button
          onClick={() => handleStatusChange(params.id, 'verified')}
          disabled={isLoading}
        >
          Verify
        </button>
      )}
      {accountStatus === 'blocked' && (
        <button
          onClick={() => handleStatusChange(params.id, 'verified')}
          disabled={isLoading}
        >
          Unblock
        </button>
      )}
      {accountStatus === 'verified' && (
        <button
          onClick={() => handleStatusChange(params.id, 'blocked')}
          disabled={isLoading}
        >
          {isLoading ? <span>Loading</span> : 'Block'}
        </button>
      )}
    </>
  );
};

export default ChefsActions;
