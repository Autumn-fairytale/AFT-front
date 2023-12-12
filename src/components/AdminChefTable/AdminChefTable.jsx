import { DataGrid } from '@mui/x-data-grid';

import { getChefs } from '@/api/chef/getChefs';
import { useQuery } from '@tanstack/react-query';

function getFullName(params) {
  console.log('params:', params);
  return `${params.row.userId.firstName || ''} ${
    params.row.userId.lastName || ''
  }`;
}

const columns = [
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    valueGetter: getFullName,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    width: 160,
    valueGetter: getFullName,
  },
];
console.log('columns:', columns);

export const AdminChefTable = () => {
  const { data } = useQuery({
    queryKey: ['chefs', 'admin'],
    queryFn: getChefs,
  });

  const rows = data?.mappedChefs;
  console.log('rows:', rows);

  return (
    <div>
      AdminChefTable
      {data && <DataGrid rows={rows} columns={columns} />}
    </div>
  );
};
