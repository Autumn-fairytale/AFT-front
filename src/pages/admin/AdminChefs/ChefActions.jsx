/* eslint-disable react/prop-types */
import { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';

import { updateChefAccountStatus } from '@/api/chef/updateChefAccountStatus';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ActionButtonWrapper, StyledButton } from './AdminChef.styled';

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
    <ActionButtonWrapper>
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
            <StyledButton
              color={checked ? 'success' : 'error'}
              onClick={() =>
                handleStatusChange(params.id, checked ? 'verified' : 'rejected')
              }
              disabled={isLoading}
              label={checked ? 'Verify' : 'Reject'}
              size="small"
            />
          </>
        )}
      {accountStatus === 'rejected' && (
        <StyledButton
          color="success"
          label="Verify"
          onClick={() => handleStatusChange(params.id, 'verified')}
          disabled={isLoading}
          size="small"
        />
      )}
      {accountStatus === 'blocked' && (
        <>
          <StyledButton
            color="success"
            label="Unblock"
            onClick={() => handleStatusChange(params.id, 'verified')}
            disabled={isLoading}
            size="small"
          />
        </>
      )}
      {isLoading ? (
        <p>Loading</p>
      ) : (
        accountStatus === 'verified' && (
          <StyledButton
            color="primary"
            label="Block"
            onClick={() => handleStatusChange(params.id, 'blocked')}
            disabled={isLoading}
            size="small"
            sx={{ color: 'black' }}
            height={'14px'}
          />
        )
      )}
    </ActionButtonWrapper>
  );
};

export default ChefsActions;
