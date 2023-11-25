import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@/theme';
import { ProvidersPropTypes } from './Providers.props';

import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
        <ToastContainer autoClose={1500} closeOnClick />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

Providers.propTypes = ProvidersPropTypes;

export default Providers;
