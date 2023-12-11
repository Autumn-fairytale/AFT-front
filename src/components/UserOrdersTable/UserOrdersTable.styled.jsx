import { styled } from '@mui/material';

import AppDataGridTable from '@/shared/AppDataGridTable/AppDataGridTable';

export const UserOrdersTableStyled = styled(AppDataGridTable)({
  '&.MuiDataGrid-root': {
    '.MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '.MuiDataGrid-cell:focus-within': {
      outline: 'none',
    },
    '.MuiDataGrid-columnHeader:focus': {
      outline: 'none',
    },
    '.MuiDataGrid-columnHeader:focus-within': {
      outline: 'none',
    },
  },
});
