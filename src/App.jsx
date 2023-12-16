import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Cookies from 'js-cookie';

import { tokenType } from '@/constants';
import { getCurrentUser } from '@/redux/auth/operations';
import { selectIsAuth } from '@/redux/auth/selectors';
import AppRouter from './routes/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const accessTokenCookie = Cookies.get(tokenType.ACCESS);

  useEffect(() => {
    if (!isAuth && accessTokenCookie) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuth, accessTokenCookie]);

  return (
    <>
      <AppRouter />

      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
