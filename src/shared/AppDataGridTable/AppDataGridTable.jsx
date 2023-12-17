import { Box } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { TableChipProps } from './AppDataGridTable.props';

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
  slots = {},
  sx = {},
  error,
  tableWidth = '100%',
  initialState = {},
  tableProps = {},
  ...otherProps
}) => {
  return (
    <Box sx={{ height: tableHeight, width: tableWidth }} {...tableProps}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={onRowClick}
        pageSizeOptions={pageSizeOptions}
        loading={loading}
        error={error}
        disableDensitySelector
        disableColumnFilter
        disableColumnMenu={disableColumnMenu}
        disableRowSelectionOnClick={true}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 !== 0 ? 'even-row' : ''
        }
        sx={{
          '& .MuiDataGrid-columnHeaderTitle': {
            fontWeight: 'bold',
          },
          '& .even-row': {
            backgroundColor: (theme) => theme.palette.primary.light,
            transition: 'background-color 0.3s ease',
          },
          ...sx,
        }}
        slots={{
          toolbar: GridToolbar,
          loadingOverlay: LinearProgress,
          ...slots,
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
          ...initialState,
        }}
        {...otherProps}
      />
    </Box>
  );
};

export default AppDataGridTable;

AppDataGridTable.propTypes = TableChipProps;
