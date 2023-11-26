import PropTypes from 'prop-types';

import AppChip from '@/shared/AppChip/AppChip';

export const StatusCell = ({ value }) => {
  const valueToShow = value === 'readyToDelivery' ? 'ready' : value;

  return <AppChip status={valueToShow} sx={{ width: 110 }} />;
};

StatusCell.propTypes = {
  value: PropTypes.string.isRequired,
};
