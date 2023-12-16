import { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import PropTypes from 'prop-types';

import { formatDateForDataGrid } from '@/helpers/formatDateForDataGrid';
import AppBarChart from '@/shared/AppBarChart/AppBarChart';
import { theme } from '@/theme';

const ProfitGraph = ({ profit }) => {
  const [profitData, setProfitData] = useState(null);

  useEffect(() => {
    if (profit) {
      const data = {
        labels: profit?.map((i) => formatDateForDataGrid(i.date)),
        datasets: [
          {
            label: 'Daily Profit',
            data: profit?.map((i) => i.profit),
            backgroundColor: theme.palette.primary.main,
          },
        ],
      };

      setProfitData(data);
    }
  }, [profit]);
  return (
    <div>
      {profitData && (
        <Box
          sx={{
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
          }}
        >
          <AppBarChart chartData={profitData} />
        </Box>
      )}
    </div>
  );
};
ProfitGraph.propTypes = {
  profit: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      profit: PropTypes.number,
    })
  ),
};
export default ProfitGraph;
