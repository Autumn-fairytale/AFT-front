/* eslint-disable react/prop-types */
import AppChip from '@/shared/AppChip/AppChip';

export const StatusCell = ({ value }) => {
  const valueToShow = value === 'readyToDelivery' ? 'ready' : value;

  return <AppChip status={valueToShow} sx={{ width: 110 }} />;
};
