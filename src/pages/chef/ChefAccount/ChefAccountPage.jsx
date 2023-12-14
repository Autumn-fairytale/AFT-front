import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { getChefById } from '@/api/chef/getChefById';
import { ChefOrdersTable } from '@/components/ChefOrdersTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import ChefProfile from '@/components/Profiles/ChefProfile/ChefProfile';
import ProfitGraph from '@/components/StatisticGraphs/ProfitGraph';
import { route } from '@/constants';
import { addSpacesToPhoneNumber } from '@/helpers';
import useChefOrdersByStatus from '@/hooks/chef/useChefOrdersByStatus';
import useGetChefStatistic from '@/hooks/chef/useGetChefStatistic';
import { selectUser } from '@/redux/auth/selectors';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const ChefAccountPage = () => {
  const user = useSelector(selectUser);
  const chefId = user.roles.find((role) => role.name === 'chef').id;

  const [chefInfo, setChefInfo] = useState();
  const { data, isLoading, error, refetch } = useChefOrdersByStatus('pending');
  const [status, setStatus] = useState('pending');
  const refetchData = () => {
    setStatus('accepted');
  };
  useEffect(() => {
    refetch();
  }, [status]);

  useEffect(() => {
    const fetchChefData = async () => {
      try {
        const response = await getChefById(chefId);
        const chef = {
          name: user?.firstName + ' ' + user?.lastName,
          avatar: response?.avatar,
          phoneNumber: addSpacesToPhoneNumber(response?.phoneNumber),
          address: response.address,
          certificate: response?.certificate,
          accountStatus: response.accountStatus.toUpperCase(),
          isAvailable: response.isAvailable.toUpperCase(),
        };
        setChefInfo(chef);
      } catch (error) {
        console.error('Error fetching chef data:', error);
      }
    };

    fetchChefData();
  }, [chefId]);
  const { data: profitData } = useGetChefStatistic(chefId) || [];
  return (
    <Main>
      <AppContainer>
        <PageTitle>CHEF DASHBOARD</PageTitle>
        {chefInfo && <ChefProfile chefInfo={chefInfo} isChef={true} />}

        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '30px 0px',
          }}
        >
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
                New orders
              </Typography>
              <Typography
                variant="p"
                component="h6"
                fontSize="16px"
                fontWeight="400"
              >
                Accepted orders display in all orders table
              </Typography>
            </Box>

            <Link
              to={`${route.CHEF_ORDERS}`}
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
          <ChefOrdersTable
            data={data}
            error={error}
            isLoading={isLoading}
            tableHeight="85vMin"
            refetchData={refetchData}
          />
        </Box>
        {profitData && (
          <>
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
            </Box>
            <ProfitGraph profit={profitData} />
          </>
        )}
      </AppContainer>
    </Main>
  );
};

export default ChefAccountPage;
