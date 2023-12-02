import { CarouselChefs } from '@/components/CarouselChefs/CarouselChefs';
import { CarouselChefsSceleton } from '@/components/CarouselChefsSceleton/CarouselDishesSceleton';
import { CarouselDishes } from '@/components/CarouselDishes/CarouselDishes';
import { CarouselDishesSceleton } from '@/components/CarouselDishesSceleton/CarouselDishesSceleton';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import { route } from '@/constants';
import { usePopularChefs, usePopularDishes } from '@/hooks';
import { Main } from '@/shared/Main/Main';

const HomePage = () => {
  const {
    data: popularDishes = [],
    isLoading: popularDishesIsLoading,
    //error: popularDishesError,
  } = usePopularDishes();
  const {
    data: popularChefs = [],
    isLoading: popularChefsIsLoading,
    //error: popularChefsError,
  } = usePopularChefs();

  console.log('isLoading:', popularChefsIsLoading);
  console.log('popularChefs:', popularChefs);
  return (
    <Main>
      <Hero />
      <Overview
        title="Popular dishes"
        redirectTo={route.DISHES}
        component={
          popularDishesIsLoading ? (
            <CarouselDishesSceleton />
          ) : (
            <CarouselDishes data={popularDishes} />
          )
        }
      />
      <Overview
        title="Popular chefs"
        redirectTo={route.CHEFS}
        component={
          popularChefsIsLoading ? (
            <CarouselChefsSceleton />
          ) : (
            <CarouselChefs data={popularChefs} />
          )
        }
      />
    </Main>
  );
};

export default HomePage;
