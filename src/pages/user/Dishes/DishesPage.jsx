import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getDishes } from '@/api/getDishes';
import DishesList from '@/components/DishesList/DishesList';
import { DishesFilter } from '@/components/DishesSearchBar/DishesSearchBar';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { useQuery } from '@tanstack/react-query';
import { TypographyStyled } from './DishesPage.styled';

const DishesPage = () => {
  const [searchParams] = useSearchParams();

  const { category, cuisine, type, spiceLevel } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const { data, isLoading } = useQuery({
    queryKey: ['dishesPage', category, cuisine, type, spiceLevel],
    queryFn: () =>
      getDishes({
        cuisine: cuisine === 'All' ? '' : cuisine,
        isVegan: type === 'All' ? '' : type,
        category: category === 'All' ? '' : category,
        spiceLevel: spiceLevel === 0 ? '' : spiceLevel,
      }),
  });

  return (
    <Main>
      <AppContainer>
        <TypographyStyled variant="h4">DISHES</TypographyStyled>

        <DishesFilter />

        {data?.length > 0 || isLoading ? (
          <DishesList data={data} isLoading={isLoading} />
        ) : (
          <h1>
            Uh-oh! It looks like the dish of your dreams is playing hide. No
            luck this time. Maybe You need to tweak your search criteria.
          </h1>
        )}
      </AppContainer>
    </Main>
  );
};

export default DishesPage;

// http://localhost:4000/api/dishes?chef=dssddd&cuisine=sfsf&isVegan=true&category=sdf&spiceLevel=1&isAvailable=true
