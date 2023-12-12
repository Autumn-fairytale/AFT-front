import { toast } from 'react-toastify';

import { updateChefOrderStatus } from '@/api/updateChefOrderStatus';

export const processRowUpdate = async (newRow, oldRow, callback = () => {}) => {
  if (newRow.status !== oldRow.status) {
    const statusToUpdate = newRow.status;
    const orderId = newRow.id;
    try {
      await updateChefOrderStatus(orderId, statusToUpdate);
      callback();
      toast.success('Updated');
    } catch (error) {
      toast.error('Error updating status');
      return oldRow;
    }
  }

  return newRow;
};
