import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { AppChipProps } from './AppDataGridTable.props';

const AppDataGridTable = ({
  rows,
  columns,
  onRowClick,
  pageSizeOptions = [5, 10, 25],
  pageSize = 5,
  loading,
  tableHeight = '500px',
  disableColumnMenu = false,
  slotProps = {},
  ...otherProps
}) => {
  return (
    <Box sx={{ height: tableHeight, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={onRowClick}
        pageSizeOptions={pageSizeOptions}
        loading={loading}
        disableDensitySelector
        disableColumnFilter
        disableColumnMenu={disableColumnMenu}
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
        }}
        slots={{
          toolbar: GridToolbar,
          loadingOverlay: LinearProgress,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
          ...slotProps,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [],
              quickFilterExcludeHiddenColumns: true,
            },
          },
          pagination: { paginationModel: { pageSize: pageSize } },
        }}
        {...otherProps}
      />
    </Box>
  );
};

export default AppDataGridTable;

AppDataGridTable.propTypes = AppChipProps;
