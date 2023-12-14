import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import ProfitGraph from '@/components/StatisticGraphs/ProfitGraph';
import UsersGraph from '@/components/StatisticGraphs/UserGraph';
import { route } from '@/constants';
import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import useGetAllUsers from '@/hooks/admin/useGetAllUsers';
import useGetDailyProfit from '@/hooks/admin/useGetDailyProfit';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const AdminPage = () => {
  const profit = useGetDailyProfit()?.data;
  const users = useGetAllUsers()?.data?.users;
  console.log('users', users);
  const [usersData, setUsersData] = useState(null);
  useEffect(() => {
    if (users) {
      const res = users
        .map((i) => {
          return {
            date: formatDateForDataGrid(i.createdAt),
            userCount: i.roles?.some((role) => role.name === 'user') ? 1 : 0,
            chefCount: i.roles?.some((role) => role.name === 'chef') ? 1 : 0,
            courierCount: i.roles?.some((role) => role.name === 'courier')
              ? 1
              : 0,
          };
        })
        .reduce((accumulator, item) => {
          const key = item.date;
          if (accumulator[key]) {
            accumulator[key].userCount += item.userCount;
            accumulator[key].chefCount += item.chefCount;
            accumulator[key].courierCount += item.courierCount;
          } else {
            accumulator[key] = {
              date: key,
              userCount: 1,
              chefCount: 1,
              courierCount: 1,
            };
          }
          return accumulator;
        }, {});
      setUsersData(Object.values(res));
    }
  }, [users]);
  console.log(usersData);
  return (
    <Main>
      <AppContainer>
        <PageTitle>ADMIN DASHBOARD</PageTitle>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '15px 5px',
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h2"
              fontSize="26px"
              fontWeight="600"
            >
              Daily Profit
            </Typography>
            <Typography
              variant="p"
              component="h6"
              fontSize="16px"
              fontWeight="400"
            >
              Total profit per day display on chart
            </Typography>
          </Box>

          <Link
            to={`${route.ADMIN_ORDERS}`}
            style={{
              fontSize: '20px',
              marginTop: '5px',
            }}
            onMouseOver={(e) => (e.target.style.textDecoration = 'none')}
            onMouseOut={(e) => (e.target.style.textDecoration = 'underline')}
          >
            All orders
          </Link>
        </Box>
        {profit && <ProfitGraph profit={profit} />}
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '15px 5px',
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h2"
              fontSize="26px"
              fontWeight="600"
            >
              Users registration statistic
            </Typography>
            <Typography
              variant="p"
              component="h6"
              fontSize="16px"
              fontWeight="400"
            >
              Total amount of new users, chefs and couriers registration per day
              display on chart
            </Typography>
          </Box>
        </Box>
        {users && <UsersGraph users={usersData} />}
      </AppContainer>
    </Main>
  );
};

export default AdminPage;
