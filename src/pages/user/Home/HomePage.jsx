import { CarouselChefs } from '@/components/CarouselChefs/CarouselChefs';
import { CarouselDishes } from '@/components/CarouselDishes/CarouselDishes';
import Hero from '@/components/Hero';
import Overview from '@/components/Overview';
import { route } from '@/constants';
import { usePopularChefs, usePopularDishes } from '@/hooks';
import { Main } from '@/shared/Main/Main';

const HomePage = () => {
  const {
    data: popularDishes = [],
    //isLoading: popularDishesIsLoading,
    //error: popularDishesError,
  } = usePopularDishes();
  const {
    data: popularChefs = [],
    //isLoading: popularChefsIsLoading,
    //error: popularChefsError,
  } = usePopularChefs();

  console.log(popularChefs);

  return (
    <Main>
      <Hero />
      <Overview
        title="Popular dishes"
        redirectTo={route.DISHES}
        component={<CarouselDishes data={popularDishes} />}
      />
      <Overview
        title="Popular chefs"
        redirectTo={route.CHEFS}
        component={<CarouselChefs data={popularChefs} />}
      />
    </Main>
  );
};

export default HomePage;
