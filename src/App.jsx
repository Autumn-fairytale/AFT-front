import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { getCurrentUser } from '@/redux/auth/operations';
import { selectIsAuth } from '@/redux/auth/selectors';
import AppRouter from './routes/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  // Fetch the current user only on the initial and not when user has just signed out
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad && !isAuth) {
      dispatch(getCurrentUser());
      setInitialLoad(false);
    }
  }, [dispatch, isAuth, initialLoad]);

  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
