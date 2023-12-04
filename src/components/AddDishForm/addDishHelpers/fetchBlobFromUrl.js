import axios from 'axios';

export const fetchBlobFromUrl = async (url) => {
  const response = await axios.get(url, { responseType: 'blob' });
  if (response.status !== 200) {
    throw new Error('Error fetching Blob');
  }
  return response.data;
};
