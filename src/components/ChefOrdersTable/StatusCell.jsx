import PropTypes from 'prop-types';

import AppChip, { toDelivery } from '@/shared/AppChip/AppChip';

export const StatusCell = ({ value }) => {
  const valueToShow = value === 'readyToDelivery' ? toDelivery : value;

  return <AppChip status={valueToShow} sx={{ width: 110 }} />;
};

StatusCell.propTypes = {
  value: PropTypes.string.isRequired,
};
