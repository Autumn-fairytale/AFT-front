import { CarouselChefs } from '@/components/CarouselChefs/CarouselChefs';
import { CarouselChefsSkeleton } from '@/components/CarouselChefsSkeleton/CarouselDishesSkeleton';
import { CarouselDishes } from '@/components/CarouselDishes/CarouselDishes';
import { CarouselDishesSkeleton } from '@/components/CarouselDishesSkeleton/CarouselDishesSkeleton';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import { route } from '@/constants';
import { usePopularChefs, usePopularDishes } from '@/hooks';
import { HomePageStyled } from './Homepage.styled';

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

  return (
    <HomePageStyled>
      <Hero />
      <Overview
        title="Popular dishes"
        redirectTo={route.DISHES}
        component={
          popularDishesIsLoading ? (
            <CarouselDishesSkeleton />
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
            <CarouselChefsSkeleton />
          ) : (
            <CarouselChefs data={popularChefs} />
          )
        }
      />
    </HomePageStyled>
  );
};

export default HomePage;
