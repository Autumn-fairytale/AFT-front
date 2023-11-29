// import AppRouter from './routes/AppRouter';

// import { AddDishForm } from './components/AddDishForm/AddDishForm';

// import { ChefOrdersTable } from './components/ChefOrdersTable/ChefOrdersTable';
import { Container } from '@mui/material';

import { UserOrdersTable } from './components/UserOrdersTable/UserOrdersTable';

function App() {
  return (
    <Container maxWidth="xl">
      <UserOrdersTable />
      {/* <ChefOrdersTable /> */}
      {/* <AddDishForm /> */}
    </Container>
  );

  // return <AppRouter />;
}

export default App;
