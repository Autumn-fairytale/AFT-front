import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { CssBaseline } from '@mui/material';

import '@fontsource/inter';
import '@fontsource/montserrat';

import Providers from '@/components/Providers';
import App from './App.jsx';
import { store } from './redux/store.js';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Providers>
        <CssBaseline />
        <App />
      </Providers>
    </Provider>
  </React.StrictMode>
);
