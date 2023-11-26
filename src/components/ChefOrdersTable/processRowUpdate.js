import { toast } from 'react-toastify';

import axios from 'axios';

export const processRowUpdate = async (newRow, oldRow, chefID) => {
  if (newRow.status !== oldRow.status) {
    const statusToUpdate =
      newRow.status === 'ready' ? 'readyToDelivery' : newRow.status;

    try {
      await axios.patch(
        `http://localhost:4000/api/chefs/${chefID}/orders/${newRow.id}`,
        {
          status: statusToUpdate,
        }
      );
      toast.success('Updated');
    } catch (error) {
      toast.error('Error updating status');
      return oldRow;
    }
  }

  return newRow;
};
