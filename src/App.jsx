// import AppRouter from './routes/AppRouter';

// import { AddDishForm } from './components/AddDishForm/AddDishForm';

import { Container, Stack } from '@mui/material';

import { ChefOrdersTable } from './components/ChefOrdersTable/ChefOrdersTable';
import { UserOrdersTable } from './components/UserOrdersTable/UserOrdersTable';

function App() {
  return (
    <Container maxWidth="lg">
      <Stack direction={'column'} spacing={10}>
        <ChefOrdersTable />

        <UserOrdersTable />
      </Stack>
      {/* <AppRouter /> */}
    </Container>
  );
}

export default App;
