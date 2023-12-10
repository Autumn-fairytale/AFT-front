import { getPopularChefs } from '@/api';
import { getChefById } from '@/api/chef/getChefById';
import { useQuery } from '@tanstack/react-query';

export const useGetPopularChefs = () => {
  const fetchPopularChefs = async () => {
    const data = await getPopularChefs();
    const chefIds = data?.map((i) => i.chefId);
    const chefs = [];

    await Promise.all(
      chefIds.map(async (chefId) => {
        const chefData = await getChefById(chefId);
        chefs.push(chefData);
      })
    );
    return chefs;
  };
  return useQuery({
    queryKey: ['popularChefs'],
    queryFn: fetchPopularChefs,
    options: {
      refetchOnWindowFocus: false,
      staleTime: 3 * 60 * 1000,
    },
  });
};
