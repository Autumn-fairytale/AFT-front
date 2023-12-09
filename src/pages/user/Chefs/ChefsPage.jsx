import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getChefs } from '@/api/chef/getChefs';
import { ChefCardSkeleton } from '@/components/ChefCardSkeleton/ChefCardSkeleton';
import { ChefsSearchBar } from '@/components/ChefsSearchBar/ChefsSearchBar';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { useQuery } from '@tanstack/react-query';
import { SkeletonCardItem, SkeletonWrapper } from './ChefsPage.styled';

const ChefsPage = () => {
  const [searchParams] = useSearchParams();
  const { search } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [searchTerm, setSearchTerm] = useState(search || null);
  const debounceDelay = 500;

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearchTerm(search);
    }, debounceDelay);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, searchParams, searchParams, search]);

  // const fetchChefs = async ({ pageParam }) => {
  // const res = await getDishes({
  //   search,
  //   cuisine: cuisine === 'All' ? '' : cuisine,
  //   isVegan: type === 'All' ? '' : type,
  //   category: category === 'All' ? '' : category,
  //   spiceLevel: spiceLevel === 0 ? '' : spiceLevel,
  //   pageParam,
  //   LIMIT,
  // });

  const { data: chefs, isLoading } = useQuery({
    queryKey: ['chefs', searchTerm],
    queryFn: () =>
      getChefs({
        search,
      }),
  });

  return (
    <Main>
      <AppContainer>
        <PageTitle> CHEFS</PageTitle>
        <ChefsSearchBar />
        <p>{JSON.stringify(chefs)}</p>
        {isLoading && (
          <SkeletonWrapper>
            {Array.from({ length: 3 }).map((_item, index) => (
              <SkeletonCardItem SkeletonCardItem key={index}>
                <ChefCardSkeleton />
              </SkeletonCardItem>
            ))}
          </SkeletonWrapper>
        )}
      </AppContainer>
    </Main>
  );
};

export default ChefsPage;
