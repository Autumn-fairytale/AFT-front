import { Bar } from 'react-chartjs-2';

import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line
import PropTypes from 'prop-types';

function AppBarChart({ chartData }) {
  return <Bar data={chartData} />;
}

AppBarChart.propTypes = {
  chartData: PropTypes.object.isRequired,
};

export default AppBarChart;
