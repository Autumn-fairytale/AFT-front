import { DishesFilter } from '@/components/DishesFilter/DishesFilter';
import { AppContainer } from '@/shared';
import { Main } from '@/shared/Main/Main';

const DishesPage = () => {
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
