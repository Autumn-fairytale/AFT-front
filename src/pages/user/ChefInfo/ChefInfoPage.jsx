import { useParams } from 'react-router-dom';

const ChefInfoPage = () => {
  const { chefId } = useParams();

  return <main>Chef Info Page: {chefId}</main>;
};

export default ChefInfoPage;
