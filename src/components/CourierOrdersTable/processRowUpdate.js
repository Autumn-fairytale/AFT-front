import { updateCourierOrderStatus } from '@/api/courier/updateCourierOrderStatus';

export const processRowUpdate = async (newRow, oldRow, callback = () => {}) => {
  if (newRow.status !== oldRow.status) {
    const statusToUpdate = newRow.status;
    const orderId = newRow.id;
    try {
      await updateCourierOrderStatus(orderId, statusToUpdate);
      callback();
    } catch (error) {
      return oldRow;
    }
  }

  return newRow;
};
