import { useParams } from 'react-router-dom';

import { Main } from '@/shared/Main/Main';

const ChefInfoPage = () => {
  const { chefId } = useParams();

  return <Main>Chef Info Page: {chefId}</Main>;
};

export default ChefInfoPage;
