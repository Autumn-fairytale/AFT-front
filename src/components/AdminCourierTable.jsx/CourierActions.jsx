/* eslint-disable react/prop-types */
import { useState } from 'react';

import { Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import { updateCourierAccountStatus } from '@/api/courier/updateCourieAccountStatus';
import { AppButton } from '@/shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const CourierActions = ({ params }) => {
  const [checked, setChecked] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: updateCourierStatusMutate } = useMutation({
    mutationFn: ([accountStatus, id]) =>
      updateCourierAccountStatus(accountStatus, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['couriers', 'admin'] });
    },
  });

  const handleStatusChange = async (id, newStatus) => {
    setIsLoading(true);

    try {
      await updateCourierStatusMutate([{ accountStatus: newStatus }, id]);
    } catch (error) {
      console.error('Error update courier account status :', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const accountStatus = params.row.accountStatus;

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
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
            <AppButton
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
        <AppButton
          color="success"
          label="Verify"
          onClick={() => handleStatusChange(params.id, 'verified')}
          disabled={isLoading}
          size="small"
        />
      )}
      {accountStatus === 'blocked' && (
        <>
          <AppButton
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
          <AppButton
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
    </Box>
  );
};

export default CourierActions;
