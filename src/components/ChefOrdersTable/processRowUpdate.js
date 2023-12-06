import { toast } from 'react-toastify';

//import axios from 'axios';
import { privateInstance } from '@/api/axios';

export const processRowUpdate = async (newRow, oldRow, chefID) => {
  if (newRow.status !== oldRow.status) {
    const statusToUpdate = newRow.status;

    const URI = `${import.meta.env.VITE_API_URL}/chefs/${chefID}/orders/${
      newRow.id
    }`; ///`http://localhost:4000/api/chefs/${chefID}/orders/${newRow.id}`;
    try {
      await privateInstance.patch(URI, {
        status: statusToUpdate,
      });
      // await axios.patch(URI, {
      //   status: statusToUpdate,
      // });

      toast.success('Updated');
    } catch (error) {
      toast.error('Error updating status');
      return oldRow;
    }
  }

  return newRow;
};
