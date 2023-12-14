import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { PageTitle } from '@/components/PageTitle/PageTitle';
import ProfitGraph from '@/components/StatisticGraphs/ProfitGraph';
import UsersGraph from '@/components/StatisticGraphs/UserGraph';
import { route } from '@/constants';
import useGetDailyProfit from '@/hooks/admin/useGetDailyProfit';
import useGetUsersStatistic from '@/hooks/admin/useGetUsersStatistic';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const AdminPage = () => {
  const profit = useGetDailyProfit()?.data;
  const usersData = useGetUsersStatistic()?.data;
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
        {/* {users && <UsersGraph users={usersData} />} */}
        {usersData && <UsersGraph users={usersData} />}
      </AppContainer>
    </Main>
  );
};

export default AdminPage;
