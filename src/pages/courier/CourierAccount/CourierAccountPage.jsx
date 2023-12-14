import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { getCourierById } from '@/api/courier/getCourierById';
import { CourierOrdersTable } from '@/components/CourierOrdersTable';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import CourierProfile from '@/components/Profiles/CourierProfile/CourierProfile';
import ProfitGraph from '@/components/StatisticGraphs/ProfitGraph';
import { route } from '@/constants';
import { addSpacesToPhoneNumber } from '@/helpers';
import useCouriersOrdersByStatus from '@/hooks/courier/useCouriersOrdersByStatus';
import useGetCourierStatistic from '@/hooks/courier/useGetChefStatistic';
import { selectUser } from '@/redux/auth/selectors';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const CourierAccountPage = () => {
  const user = useSelector(selectUser);
  const courierId = user.roles.find((role) => role.name === 'courier').id;

  const [courierInfo, setCourierInfo] = useState();
  useEffect(() => {
    const fetchCourierData = async () => {
      try {
        const response = await getCourierById({ courierId });
        const courier = {
          name: user.firstName + ' ' + user?.lastName,
          avatar: response.avatar,
          phoneNumber: addSpacesToPhoneNumber(response.phoneNumber),
          address: response.address,
          accountStatus: response.accountStatus.toUpperCase(),
          vehicleType: response.vehicleType.toUpperCase(),
          isAvailable: response?.isAvailable.toUpperCase(),
        };
        setCourierInfo(courier);
      } catch (error) {
        console.error('Error fetching courier data:', error);
      }
    };

    fetchCourierData();
  }, [courierId]);
  const { data, isLoading, error, refetch } = useCouriersOrdersByStatus(
    'readyToDelivery',
    courierInfo?.address?.country,
    courierInfo?.address?.city
  );
  const [status, setStatus] = useState('readyToDelivery');
  const refetchData = () => {
    setStatus('delivering');
  };
  useEffect(() => {
    refetch();
  }, [status]);

  const { data: profitData } = useGetCourierStatistic(courierId) || [];

  return (
    <Main>
      <AppContainer>
        <PageTitle>COURIER DASHBOARD</PageTitle>
        {courierInfo && <CourierProfile courierInfo={courierInfo} />}

        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: '30px 0',
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
                Change status to DELIVERING to take order
              </Typography>
            </Box>

            <Link
              to={`${route.COURIER_ORDERS}`}
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

          <CourierOrdersTable
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

export default CourierAccountPage;
