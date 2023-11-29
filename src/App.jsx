// import AppRouter from './routes/AppRouter';

// import { AddDishForm } from './components/AddDishForm/AddDishForm';

import { Container } from '@mui/material';

import { ChefOrdersTable } from './components/ChefOrdersTable/ChefOrdersTable';

// import { UserOrdersTable } from './components/UserOrdersTable/UserOrdersTable';

function App() {
  return (
    <Container maxWidth="lg">
      <ChefOrdersTable />

      {/* <AppRouter /> */}
    </Container>
  );
}

export default App;
