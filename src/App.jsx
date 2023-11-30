// import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';

import { AddDishForm } from './components/AddDishForm/AddDishForm';

// import { ChefOrdersTable } from './components/ChefOrdersTable';
import 'react-toastify/dist/ReactToastify.css';
// import { DishOrderCard } from './components/DishOrderCard/DishOrderCard';

function App() {
  return (
    <>
      <AddDishForm />
      {/* <ChefOrdersTable /> */}
      {/* <DishOrderCard /> */}
      <ToastContainer autoClose={1500} closeOnClick />
    </>
  );
}

export default App;
