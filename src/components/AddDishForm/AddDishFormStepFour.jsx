import { Stack, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { MOCK_GAP } from './AddDishForm';
import { FormattedNumberInput } from './FormattedInput';

export const AddDishFormStepFour = ({ control, errors }) => {
  return (
    <>
      <FormattedNumberInput
        sx={{ width: '300px' }}
        control={control}
        name="weight"
        label="Weight (g)"
        error={!!errors.weight}
        helperText={errors.weight?.message ?? MOCK_GAP}
      />

      <FormattedNumberInput
        sx={{ width: '300px' }}
        control={control}
        name="cookTime"
        label="Cooking Time (m)"
        error={!!errors.cookTime}
        helperText={errors.cookTime?.message ?? MOCK_GAP}
      />

      <Typography variant="body2">Nutrition Facts (optional)</Typography>

      <Stack direction="row" spacing={1} sx={{ width: '300px', mt: 1 }}>
        <FormattedNumberInput
          sx={{ width: '50%' }}
          control={control}
          name="nutrition.calories"
          label="Calories"
          error={!!errors['nutrition.calories']}
          helperText={errors['nutrition.calories']?.message ?? MOCK_GAP}
        />
        <FormattedNumberInput
          control={control}
          name="nutrition.protein"
          label="Protein  (g)"
          error={!!errors['nutrition.protein']}
          helperText={errors['nutrition.protein']?.message ?? MOCK_GAP}
        />
      </Stack>

      <Stack direction="row" spacing={1} sx={{ width: '300px' }}>
        <FormattedNumberInput
          sx={{ width: '50%' }}
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
      </Stack>
    </>
  );
};

AddDishFormStepFour.propTypes = {
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
};
