import { ToastContainer } from 'react-toastify';

// import { AddDishForm } from './components/AddDishForm';
import AppRouter from './routes/AppRouter';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRouter />

      {/* <AddDishForm /> */}
      {/* <UserOrdersTable /> */}

      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
