import { useState } from 'react';

import { Box, Chip, Typography } from '@mui/material';

import { DishOrderCardIngredientsProps } from './DishOrderCardIngredients.props';
import {
  AllergyInfoBox,
  DishIngredientsCard,
  ExpandButton,
  IngredientsBox,
} from './DishOrderCardIngredientsStyled';

export const DishOrderCardIngredients = ({ ingredients = [] }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <DishIngredientsCard>
        <IngredientsBox>
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
        </IngredientsBox>
        {ingredients.length > 6 && (
          <ExpandButton onClick={handleExpandClick}>
            {expanded ? 'Less' : 'More'}
          </ExpandButton>
        )}
      </DishIngredientsCard>
      {!expanded && (
        <AllergyInfoBox
          sx={{
            bgcolor: 'background.default',
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
        </AllergyInfoBox>
      )}
    </Box>
  );
};

DishOrderCardIngredients.propTypes = DishOrderCardIngredientsProps;
