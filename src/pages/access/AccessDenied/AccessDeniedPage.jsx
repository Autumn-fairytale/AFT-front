import accessDeniedGis from '@/assets/images/no.gif';
import { ErrorsPage } from '@/components/ErrorsPage';

const AccessDeniedPage = () => {
  const text = `Error: Access denied`;
  return <ErrorsPage img={accessDeniedGis} text={text} />;
};

export default AccessDeniedPage;
