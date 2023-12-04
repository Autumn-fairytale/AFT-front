import { Box, Typography } from '@mui/material';

const mockIngredients = [
  'Chickpea flour',
  'Bean puree',
  'Spices',
  'Wholemeal breadcrumbs',
  'Vegetable oil',
];

export const DishOrderCardIngredients = () => {
  return (
    <Box sx={{ height: 100 }}>
      <Typography variant="body2" component="p">
        <Typography variant="body2" component="p">
          {mockIngredients.join(', ')}
        </Typography>
      </Typography>
      <Box
        sx={{
          bgcolor: 'background.default',
          borderRadius: 0.5,
          boxShadow: 1,
        }}
      >
        <Typography
          variant="body2"
          component="p"
          color="text.secondary"
          fontSize={12}
          mt={1}
        >
          Please note that dishes may contain - or may be processed in a
          facility that contains - allergens such as milk, peanuts, tree nuts,
          wheat, dairy, eggs, fish, shellfish, soy, or sesame.
        </Typography>
      </Box>
    </Box>
  );
};
