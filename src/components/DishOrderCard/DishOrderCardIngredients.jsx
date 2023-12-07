import { useState } from 'react';

import { Box, Button, Card, Chip, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const DishOrderCardIngredients = ({ ingredients = [] }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Card
        elevation={0}
        sx={{
          height: expanded ? 'auto' : '75px',
          '&:hover': {
            overflowY: 'auto',
          },
          '&::-webkit-scrollbar': {
            width: '4px',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {ingredients.map((ingredient, index) => (
            <Chip
              key={index}
              label={ingredient.name}
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: index % 2 === 0 ? 'primary.light' : 'default',
              }}
            />
          ))}
        </Box>
        {ingredients.length > 6 && (
          <Button
            onClick={handleExpandClick}
            sx={{ textTransform: 'none', mt: 1, p: 0, m: 0 }}
          >
            {expanded ? 'Less' : 'More'}
          </Button>
        )}
      </Card>
      {!expanded && (
        <Box
          sx={{
            bgcolor: 'background.default',
            borderRadius: 0.5,
            boxShadow: 1,
            mt: 1,
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
      )}
    </Box>
  );
};
