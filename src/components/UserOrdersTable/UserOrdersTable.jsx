import { useMemo } from 'react';

import { calculateTotalOrdersSum } from '@/helpers/calculateTotalOrdersSum';
import useUserOrders from '@/hooks/useUserOrders ';
import { CustomFooter } from './CustomFooter';
import { userOrdersTableColumns } from './UserOrdersColumns';
import { UserOrdersTableStyled } from './UserOrdersTable.styled';

export const UserOrdersTable = () => {
  const { data: orders = [], isLoading, error } = useUserOrders();

  const totalOrdersPrice = useMemo(
    () => calculateTotalOrdersSum(orders),
    [orders]
  );

  return (
    <UserOrdersTableStyled
      columns={userOrdersTableColumns}
      rows={orders}
      loading={isLoading}
      error={error}
      pageSize={10}
      disableColumnMenu={true}
      disableColumnFilter={true}
      disableColumnSelector={true}
      rowHeight={60}
      sortModel={[]}
      slots={{
        footer: () => (
          <CustomFooter
            totalSum={totalOrdersPrice}
            pageSize={5}
            rowCount={orders.length}
          />
        ),
      }}
    />
  );
};
