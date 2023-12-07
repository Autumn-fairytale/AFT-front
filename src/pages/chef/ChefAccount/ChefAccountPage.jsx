import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { getChefById } from '@/api/chef/getChefById';
import { ChefOrdersTable } from '@/components/ChefOrdersTable';
import ChefProfile from '@/components/Profiles/ChefProfile/ChefProfile';
import { route } from '@/constants';
import { addSpacesToPhoneNumber } from '@/helpers';
import useChefOrdersByStatus from '@/hooks/useChefOrdersByStatus';
import { selectUser } from '@/redux/auth/selectors';
import { Main } from '@/shared/Main/Main';

const ChefAccountPage = () => {
  const user = useSelector(selectUser);
  const chefId = user.roles.find((role) => role.name === 'chef').id;

  const [chefInfo, setChefInfo] = useState();

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
        };
        setChefInfo(chef);
      } catch (error) {
        console.error('Error fetching chef data:', error);
      }
    };

    fetchChefData();
  }, [chefId]);

  return (
    <Main>
      <ChefProfile chefInfo={chefInfo} isChef={true} />

      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '20px 60px',
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
          getOrders={useChefOrdersByStatus}
          status="pending"
          tableHeight="auto"
        />
      </Box>
    </Main>
  );
};

export default ChefAccountPage;
