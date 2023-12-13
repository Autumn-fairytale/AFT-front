import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { getCurrentUser } from '@/redux/auth/operations';
import { selectIsAuth } from '@/redux/auth/selectors';
import { NotificationToast } from './components/NotificationToast/NotificationToast';
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

  const { notifications } = useNotifications();
  const [toastId, setToastId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (notifications.length > 0) {
      const content = (
        <NotificationToast notifications={notifications} navigate={navigate} />
      );
      if (toastId === null) {
        const id = toast(content, { autoClose: false });
        setToastId(id);
      } else {
        toast.update(toastId, { render: content });
      }
    }
  }, [notifications, navigate, toastId]);

  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
