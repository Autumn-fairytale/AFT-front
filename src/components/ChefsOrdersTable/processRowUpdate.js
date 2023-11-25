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
    } catch (error) {
      console.error('Error updating status:', error);
      return oldRow;
    }
  }
  return newRow;
};
