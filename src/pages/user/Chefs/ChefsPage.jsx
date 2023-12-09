import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getChefs } from '@/api/chef/getChefs';
import { ChefCardSkeleton } from '@/components/ChefCardSkeleton/ChefCardSkeleton';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { useQuery } from '@tanstack/react-query';
import { SkeletonCardItem, SkeletonWrapper } from './ChefsPage.styled';
SkeletonCardItem;
const ChefsPage = () => {
  const [searchParams] = useSearchParams();
  const { search: name } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [searchTerm, setSearchTerm] = useState(name || '');
  const debounceDelay = 500;

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearchTerm(name);
    }, debounceDelay);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, searchParams, searchParams, name]);

  const { data: chefs, isLoading } = useQuery({
    queryKey: ['chefs', searchTerm],
    queryFn: getChefs,
  });

  return (
    <Main>
      <AppContainer>
        <PageTitle> CHEFS</PageTitle>
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
