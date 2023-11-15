// import { Button } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

import { MOCK_GAP } from './AddDishForm';
import { AddDishFormSpiceLevel } from './AddDishFormSpiceLevel/AddDishFormSpiceLevel';
import { FormattedNumberInput } from './FormattedInput';

export const AddDishFormStepThree = ({ control, errors }) => {
  return (
    <>
      <FormattedNumberInput
        sx={{ width: '300px' }}
        control={control}
        name="weight"
        label="Weight (kg)"
        error={!!errors.price}
        helperText={errors.price?.message ?? MOCK_GAP}
      />

      <FormattedNumberInput
        sx={{ width: '300px' }}
        control={control}
        name="cookTime"
        label="Cooking Time (minutes)"
        error={!!errors.price}
        helperText={errors.price?.message ?? MOCK_GAP}
      />

      <Accordion sx={{ width: '300px', mt: 2 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Nutrition Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormattedNumberInput
            control={control}
            name="nutrition.calories"
            label="Calories"
            error={!!errors['nutrition.calories']}
            helperText={errors['nutrition.calories']?.message ?? MOCK_GAP}
          />
          <FormattedNumberInput
            control={control}
            name="nutrition.protein"
            label="Protein (g)"
            error={!!errors['nutrition.protein']}
            helperText={errors['nutrition.protein']?.message ?? MOCK_GAP}
          />
          <FormattedNumberInput
            control={control}
            name="nutrition.fats"
            label="Fats (g)"
            error={!!errors['nutrition.fats']}
            helperText={errors['nutrition.fats']?.message ?? MOCK_GAP}
          />
          <FormattedNumberInput
            control={control}
            name="nutrition.carbohydrates"
            label="Carbohydrates (g)"
            error={!!errors['nutrition.carbohydrates']}
            helperText={errors['nutrition.carbohydrates']?.message ?? MOCK_GAP}
          />
        </AccordionDetails>
      </Accordion>
      <AddDishFormSpiceLevel
        control={control}
        name="spiceLevel"
        error={errors.spiceLevel}
      />
    </>
  );
};

AddDishFormStepThree.propTypes = {
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
};

// 9 weight
// 10 cookingTime
// 11 nutrition facts
// 12 spiceLevel
// 12 isAvailable
