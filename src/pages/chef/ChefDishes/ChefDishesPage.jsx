import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { getDishes } from '@/api/dishes/getDishes';
import NoFoundDish from '@/assets/images/Dishes_page/NoDishesFound.png';
import { DishCardSkeleton } from '@/components/DishCardSkeleton/DishCardSkeleton';
import DishesList from '@/components/DishesList/DishesList';
import PageMessage from '@/components/PageMessage/PageMessage';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import {
  InfiniteScrollStyled,
  SkeletonCardItem,
  SkeletonWrapper,
} from '@/pages/user/Dishes/DishesPage.styled';
import { selectUser } from '@/redux/auth/selectors';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';
import { useInfiniteQuery } from '@tanstack/react-query';

const ChefDishesPage = () => {
  const user = useSelector(selectUser);
  const chefId = user.roles.find((role) => role.name === 'chef').id;
  const [totalPages, setTotalPages] = useState(null);
  const LIMIT = 10;

  const fetchDishes = async ({ pageParam }) => {
    const res = await getDishes({
      chef: chefId,
      pageParam,
      limit: LIMIT,
    });
    console.log(res);
    setTotalPages(res.pageInfo.totalPages);
    return res;
  };

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['dishesPage', chefId],
    queryFn: fetchDishes,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        allPages.length !== totalPages ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  let dishes = [];
  if (data && data.pages) {
    dishes = data.pages
      .map((item) => {
        return item.dishes;
      })
      .reduce((acc, item) => [...acc, ...item], []);
  }

  const qtyDishes = dishes?.length;
  return (
    <Main style={{ display: 'flex', justifyContent: 'center' }}>
      <AppContainer>
        <PageTitle>DISH</PageTitle>
        <Box style={{ margin: '50px 0' }}>
          {isLoading ? (
            <SkeletonWrapper>
              {Array.from({ length: 3 }).map((_item, index) => (
                <SkeletonCardItem SkeletonCardItem key={index}>
                  <DishCardSkeleton />
                </SkeletonCardItem>
              ))}
            </SkeletonWrapper>
          ) : qtyDishes === 0 ? (
            <PageMessage
              image={NoFoundDish}
              message={`Uh-oh! You don't have any dish :(`}
            ></PageMessage>
          ) : (
            <InfiniteScrollStyled
              dataLength={qtyDishes}
              scrollThreshold={0.6}
              next={() => fetchNextPage()}
              hasMore={hasNextPage}
              height={800}
              loader={<h3>Loading...</h3>}
            >
              <DishesList data={dishes} isChef={true} />
            </InfiniteScrollStyled>
          )}
        </Box>
      </AppContainer>
    </Main>
  );
};

export default ChefDishesPage;
