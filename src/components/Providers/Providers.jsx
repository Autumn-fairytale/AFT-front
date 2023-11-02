import { ThemeProvider } from '@mui/material/styles';

import theme from '@/theme';
import { ProvidersPropTypes } from './Providers.props';

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Providers.propTypes = ProvidersPropTypes;

export default Providers;
