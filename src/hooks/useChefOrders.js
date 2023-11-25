import { useQuery } from 'react-query';

import axios from 'axios';

const useChefOrder = (chefID) => {
  const fetchUserOrders = async () => {
    const URI = `http://localhost:4000/api/chefs/${chefID}/orders`;
    return await axios.get(URI).then((response) => response.data);
  };

  return useQuery(['orders', chefID], fetchUserOrders, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 3 * 60 * 1000,
  });
};

export default useChefOrder;
