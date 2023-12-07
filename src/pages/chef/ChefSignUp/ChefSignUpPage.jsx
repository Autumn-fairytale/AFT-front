import { Box, Typography } from '@mui/material';

import CreateChefForm from '@/components/CreateChefForm/CreateChefForm';
import { Main } from '@/shared/Main/Main';

const ChefSignUpPage = () => {
  return (
    <Main>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          marginTop="10px"
          marginBottom="10px"
          fontSize="28px"
          fontWeight="600"
        >
          Create Chef Profile
        </Typography>
      </Box>

      <CreateChefForm />
    </Main>
  );
};

export default ChefSignUpPage;
