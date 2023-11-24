import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import { store } from '@/redux/store';
import { theme } from '@/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProvidersPropTypes } from './Providers.props';

const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  );
};

Providers.propTypes = ProvidersPropTypes;

export default Providers;
