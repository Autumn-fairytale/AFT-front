import { useParams } from 'react-router-dom';

import { ReviewsList } from '@/components/ReviewsList/ReviewsList';
import { Main } from '@/shared/Main/Main';

const ChefInfoPage = () => {
  const { chefId } = useParams();

  return (
    <Main>
      Chef Info Page: {chefId}
      <div
        style={{ width: '100%', height: '800px', border: '1px solid red' }}
      ></div>
      {<ReviewsList id={chefId} />}
    </Main>
  );
};

export default ChefInfoPage;
