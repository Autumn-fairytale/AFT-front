import { useQuery } from 'react-query';

import axios from 'axios';

const useUserOrders = (userId) => {
  const fetchUserOrders = async () => {
    const URI = `http://localhost:4000/api/orders/by-user/${userId}`;
    return await axios.get(URI).then((response) => response.data);
  };

  return useQuery(['orders', userId], () => fetchUserOrders());
};

export default useUserOrders;
