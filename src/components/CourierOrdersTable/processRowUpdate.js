import { toast } from 'react-toastify';

import { updateCourierOrderStatus } from '@/api/courier/updateCourierOrderStatus';

export const processRowUpdate = async (newRow, oldRow) => {
  if (newRow.status !== oldRow.status) {
    const statusToUpdate = newRow.status;
    const orderId = newRow.id;
    try {
      await updateCourierOrderStatus(orderId, statusToUpdate);
      toast.success('Updated');
    } catch (error) {
      toast.error('Error updating status');
      return oldRow;
    }
  }

  return newRow;
};
