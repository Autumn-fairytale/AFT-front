/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';

// import { Check, Save } from '@mui/icons-material';
// import { Box, CircularProgress, Fab } from '@mui/material';
// import { green } from '@mui/material/colors';

const ChefsActions = ({ params, rowId, setRowId }) => {
  //   console.log('setRowId:', setRowId);
  console.log('rowId:', rowId);
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

  return (
    <>
      <button onClick={() => setRowId(params.id)}>Edit</button>
      {/* Status change options */}
      {/* <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button onClick={() => handleStatusChange(params.id, newStatus)}>
        Change Status
      </button> */}
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
