import { Line } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line
import PropTypes from 'prop-types';
function AppLineChart({ chartData }) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
        callback: function (value) {
          return value.toLocaleString();
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
AppLineChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default AppLineChart;
