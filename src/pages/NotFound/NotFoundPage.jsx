import notFoundGif from '@/assets/images/not-found.gif';
import { ErrorsPage } from '@/components/ErrorsPage';

const NotFoundPage = () => {
  const text = `Error: Page not found. It's sad...`;
  return <ErrorsPage img={notFoundGif} text={text} />;
};

export default NotFoundPage;
