// import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';

import AppRouter from './routes/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRouter />

      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
