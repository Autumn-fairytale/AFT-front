import { Box, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { CustomPagination } from './Pagination';

export const CustomFooter = ({ totalSum = 0, rowCount = 0 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
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

CustomFooter.propTypes = {
  totalSum: PropTypes.number,
  rowCount: PropTypes.number,
};
