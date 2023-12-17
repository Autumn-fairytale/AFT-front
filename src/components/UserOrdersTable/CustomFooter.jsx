import { Box, Typography } from '@mui/material';
import { GridPagination } from '@mui/x-data-grid';

import PropTypes from 'prop-types';

import { convertToMoney } from '@/helpers';

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
          Total sum: <b>{convertToMoney(totalSum)}</b>
        </Typography>
        <Typography>
          Total orders: <b>{rowCount}</b>
        </Typography>
      </Box>
      <GridPagination />
    </Box>
  );
};

CustomFooter.propTypes = {
  totalSum: PropTypes.number,
  rowCount: PropTypes.number,
};
