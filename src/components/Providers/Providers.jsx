import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/theme';
import { ProvidersPropTypes } from './Providers.props';

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

Providers.propTypes = ProvidersPropTypes;

export default Providers;
