import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import PropTypes from 'prop-types';

import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import AppLineChart from '@/shared/AppBarChart/AppLineChart';
import { theme } from '@/theme';

const UsersGraph = ({ users }) => {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    if (users) {
      const data = {
        labels: users?.map((i) => formatDateForDataGrid(i.date)),
        datasets: [
          {
            label: 'Users amount',
            data: users?.map((i) => i.userCount),
            backgroundColor: theme.palette.primary.main,
            tension: 0.4,
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
          },
          {
            label: 'Chefs amount',
            data: users?.map((i) => i.chefCount),
            backgroundColor: theme.palette.error.main,
            tension: 0.4,
            borderColor: theme.palette.error.main,
            borderWidth: 2,
          },
          {
            label: 'Couriers amount',
            data: users?.map((i) => i.courierCount),
            backgroundColor: theme.palette.info.dark,
            tension: 0.4,
            borderColor: theme.palette.info.dark,
            borderWidth: 2,
          },
        ],
      };

      setUsersData(data);
    }
  }, [users]);
  return (
    <div>
      {usersData && (
        <Box
          sx={{
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
            marginTop: '20px',
          }}
        >
          <AppLineChart chartData={usersData} />
        </Box>
      )}
    </div>
  );
};

UsersGraph.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      userCount: PropTypes.number,
      chefCount: PropTypes.number,
      courierCount: PropTypes.number,
    })
  ).isRequired,
};

export default UsersGraph;
