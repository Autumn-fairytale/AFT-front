import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from '@mui/material/styles';

import { store } from '@/redux/store';
import { theme } from '@/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ProvidersPropTypes } from './Providers.props';

import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
            <ToastContainer autoClose={1500} closeOnClick />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};

Providers.propTypes = ProvidersPropTypes;

export default Providers;
