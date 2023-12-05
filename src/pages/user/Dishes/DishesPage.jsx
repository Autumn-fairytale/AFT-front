import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getDishes } from '@/api/getDishes';
import { DishesFilter } from '@/components/DishesFilter/DishesFilter';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { useQuery } from '@tanstack/react-query';

const DishesPage = () => {
  const [searchParams] = useSearchParams();
  console.log('searchParams:', searchParams);
  const { category, cuisine, type, spiceLevel } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const query = useQuery({
    queryKey: ['dishesPage', category, cuisine, type, spiceLevel],
    queryFn: () =>
      getDishes({
        cuisine: cuisine === 'All' ? '' : cuisine,
        isVegan: type === 'All' ? '' : type,
        category: category === 'All' ? '' : category,
        spiceLevel: spiceLevel === 0 ? '' : spiceLevel,
      }),
  });
  console.log('query:', query);
  // console.log('query:', query);

  return (
    <Main>
      <AppContainer>
        Dishes page
        {/* Searchbar */}
        <div>
          <DishesFilter />
        </div>
      </AppContainer>
    </Main>
  );
};

export default DishesPage;

// http://localhost:4000/api/dishes?chef=dssddd&cuisine=sfsf&isVegan=true&category=sdf&spiceLevel=1&isAvailable=true
