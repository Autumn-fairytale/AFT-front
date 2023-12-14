import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { getCurrentUser } from '@/redux/auth/operations';
import { selectIsAuth } from '@/redux/auth/selectors';
// import { useToastNotifications } from './hooks';
import AppRouter from './routes/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (!isAuth && storedToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isAuth]);

  // useToastNotifications(navigate);

  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
