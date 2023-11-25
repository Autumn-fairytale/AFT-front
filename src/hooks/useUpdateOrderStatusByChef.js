import { useQuery } from 'react-query';

import axios from 'axios';

const useUpdateOrderStatusByChef = (chefID) => {
  const fetchUserOrders = async () => {
    const URI = `http://localhost:4000/api/chefs/${chefID}/orders`;
    return await axios.get(URI).then((response) => response.data);
  };

  return useQuery(['orders', chefID], () => fetchUserOrders());
};

export default useUpdateOrderStatusByChef;
