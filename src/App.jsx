import { useEffect, useRef } from 'react';
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

  const navigate = useNavigate();
  const toastIdRef = useRef(null);
  const lastNotificationId = useRef(null);

  useEffect(() => {
    if (notifications.length > 0) {
      const latestNotification = notifications[notifications.length - 1];

      if (lastNotificationId.current !== latestNotification.id) {
        const content = (
          <NotificationToast
            notifications={notifications}
            navigate={navigate}
          />
        );

        if (toastIdRef.current === null) {
          toastIdRef.current = toast(content, {
            autoClose: false,
            onClose: () => {
              toastIdRef.current = null;
            },
          });
        } else {
          toast.update(toastIdRef.current, {
            render: content,
            autoClose: false,
          });
        }

        lastNotificationId.current = latestNotification.id;
      }
    }
  }, [notifications, navigate]);

  return (
    <>
      <AppRouter />
      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
