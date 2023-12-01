import { toast } from 'react-toastify';

import axios from 'axios';

export const processRowUpdate = async (newRow, oldRow, chefID) => {
  if (newRow.status !== oldRow.status) {
    const statusToUpdate = newRow.status;

    const URI = `http://localhost:4000/api/chefs/${chefID}/orders/${newRow.id}`;
    try {
      await axios.patch(URI, {
        status: statusToUpdate,
      });

      toast.success('Updated');
    } catch (error) {
      toast.error('Error updating status');
      return oldRow;
    }
  }

  return newRow;
};
