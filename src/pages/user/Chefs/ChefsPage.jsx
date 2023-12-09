import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getChefs } from '@/api/chef/getChefs';
import { ChefCardSkeleton } from '@/components/ChefCardSkeleton/ChefCardSkeleton';
import { ChefsSearchBar } from '@/components/ChefsSearchBar/ChefsSearchBar';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { useInfiniteQuery } from '@tanstack/react-query';
import {
  InfiniteScrollStyled,
  SkeletonCardItem,
  SkeletonWrapper,
} from './ChefsPage.styled';

const ChefsPage = () => {
  const [searchParams] = useSearchParams();
  const [totalPages, setTotalPage] = useState(null);
  const { search } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [searchTerm, setSearchTerm] = useState(search || null);
  const debounceDelay = 500;
  const LIMIT = 10;

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearchTerm(search);
    }, debounceDelay);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, searchParams, search]);

  const fetchChefs = async ({ pageParam }) => {
    const res = await getChefs({
      search,
      pageParam,
      LIMIT,
    });
    setTotalPage(res.pageInfo.totalPages);
    return res;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['chefsPage', searchTerm],
    queryFn: fetchChefs,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  let chefs;
  if (data) {
    chefs = data.pages
      .map((item) => {
        return item.mappedChefs;
      })
      .reduce((acc, item) => [...acc, ...item], []);
  }

  const qtyChefs = chefs?.length;
  console.log('qtyChefs:', qtyChefs);

  return (
    <Main>
      <AppContainer>
        <PageTitle> CHEFS</PageTitle>
        <ChefsSearchBar />
        <p>{JSON.stringify(data)}</p>
        {isLoading && (
          <SkeletonWrapper>
            {Array.from({ length: 3 }).map((_item, index) => (
              <SkeletonCardItem SkeletonCardItem key={index}>
                <ChefCardSkeleton />
              </SkeletonCardItem>
            ))}
          </SkeletonWrapper>
        )}
        {!isLoading && data && (
          <InfiniteScrollStyled
            dataLength={qtyChefs}
            scrollThreshold={0.6}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            height={800}
            loader={<h3>Loading...</h3>}
          >
            {/* <DishesList data={dishes} /> */}
          </InfiniteScrollStyled>
        )}
      </AppContainer>
    </Main>
  );
};

export default ChefsPage;
