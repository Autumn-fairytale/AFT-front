import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { getCurrentUser } from '@/redux/auth/operations';
import { selectIsAuth } from '@/redux/auth/selectors';
import { useNotifications } from './hooks';
import AppRouter from './routes/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!isAuth && storedToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuth]);

  useNotifications();

  return (
    <>
      <AppRouter />

      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
