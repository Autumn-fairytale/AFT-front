/* eslint-disable react/prop-types */
import { useState } from 'react';

import Checkbox from '@mui/material/Checkbox';

import { updateChefAccountStatus } from '@/api/chef/updateChefAccountStatus';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// import { Check, Save } from '@mui/icons-material';
// import { Box, CircularProgress, Fab } from '@mui/material';
// import { green } from '@mui/material/colors';

const ChefsActions = ({
  params,
  // rowId, setRowId
}) => {
  // console.log('setRowId:', setRowId);
  // console.log('rowId:', rowId);
  // console.log('setRowId:', setRowId);
  // console.log('params:', params);
  //   console.log('setRowId:', setRowId);
  // const [newStatus, setNewStatus] = useState();
  // console.log('setNewStatus:', setNewStatus);

  const [checked, setChecked] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  console.log('isLoading:', isLoading);

  // console.log('rowId:', rowId);
  const queryClient = useQueryClient();

  //   console.log('params:', params);
  //   const success = false;
  //   const loading = false;
  //   const handleSubmit = () => {
  //     console.log('Submit');
  //   };
  //   const handleSubmit = async () => {
  //     setLoading(true);

  //     const { role, active, _id } = params.row;
  //     const result = await updateStatus({ role, active }, _id, dispatch);
  //     if (result) {
  //       setSuccess(true);
  //       setRowId(null);
  //     }
  //     setLoading(false);
  //   };

  //   useEffect(() => {
  //     if (rowId === params.id && success) setSuccess(false);
  //   }, [rowId]);
  // =========================================
  // {
  //   "accountStatus": "string",
  // }

  // export const accountStatus = Object.freeze({
  //   PENDING: 'pending',

  //   VERIFIED: 'verified',
  //   REJECTED: 'rejected',
  //   BLOCKED: 'blocked',
  // });

  // ====================================

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
      {/* <button onClick={() => setRowId(params.id)}>Edit</button> */}
      {accountStatus !== 'verified' && accountStatus !== 'blocked' && (
        <>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <button
            onClick={() =>
              handleStatusChange(params.id, checked ? 'verified' : 'rejected')
            }
          >
            {checked ? 'Verify' : 'Reject'}
          </button>
        </>
      )}
      {accountStatus === 'blocked' && (
        <button onClick={() => handleStatusChange(params.id, 'verified')}>
          Unblock
        </button>
      )}
      {accountStatus === 'verified' && (
        <button onClick={() => handleStatusChange(params.id, 'blocked')}>
          Block
        </button>
      )}
    </>

    // <Box
    //   sx={{
    //     m: 1,
    //     position: 'relative',
    //   }}
    // >
    //   {success ? (
    //     <Fab
    //       color="primary"
    //       sx={{
    //         width: 40,
    //         height: 40,
    //         bgcolor: green[500],
    //         '&:hover': { bgcolor: green[700] },
    //       }}
    //     >
    //       <Check />
    //     </Fab>
    //   ) : (
    //     <Fab
    //       color="primary"
    //       sx={{
    //         width: 40,
    //         height: 40,
    //       }}
    //       disabled={params.id !== rowId || loading}
    //       onClick={handleSubmit}
    //     >
    //       <Save />
    //     </Fab>
    //   )}
    //   {loading && (
    //     <CircularProgress
    //       size={52}
    //       sx={{
    //         color: green[500],
    //         position: 'absolute',
    //         top: -6,
    //         left: -6,
    //         zIndex: 1,
    //       }}
    //     />
    //   )}
    // </Box>
  );
};

export default ChefsActions;
