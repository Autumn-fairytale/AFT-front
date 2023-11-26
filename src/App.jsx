// import AppRouter from './routes/AppRouter';

import { ChefOrdersTable } from './components/ChefOrdersTable/ChefOrdersTable';
import { UserOrdersTable } from './components/UserOrdersTable/UserOrdersTable';

function App() {
  return (
    <>
      <UserOrdersTable />
      <ChefOrdersTable />
    </>
  );

  // return <AppRouter />;
}

export default App;
