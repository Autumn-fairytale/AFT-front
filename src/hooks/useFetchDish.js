import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import axios from 'axios';

export const useFetchDish = (id) => {
  const url = `http://localhost:4000/api/dishes/${id}`;
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      //   console.log(data, 'data');
      return data;
    } catch (error) {
      toast.error('Error fetching data');
      throw error;
    }
  };

  return useQuery(['dish', url], fetchData, {
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};
