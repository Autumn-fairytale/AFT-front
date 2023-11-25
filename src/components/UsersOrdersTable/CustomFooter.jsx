/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material';

import { CustomPagination } from './Pagination';

export const CustomFooter = ({ totalSum = 0.01, rowCount }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box>
        <Typography>
          Total sum: <b>{totalSum.toFixed(2)} ₴</b>
        </Typography>
        <Typography>
          Total orders: <b>{rowCount}</b>
        </Typography>
      </Box>
      <CustomPagination />
    </Box>
  );
};
