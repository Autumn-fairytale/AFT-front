import { Stack, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { FIELD_WIDTH, MOCK_GAP } from '../../AddDishForm';
import { AddDishFormFieldEndAdornment } from '../../AddDishFormFieldEndAdornment/AddDishFormFieldEndAdornment';
import { FormattedNumberInput } from '../../FormattedNumberInput';

export const AddDishFormStepFour = ({ control, errors }) => {
  const GramEndAdornment = <AddDishFormFieldEndAdornment text="g" />;

  return (
    <>
      <FormattedNumberInput
        sx={{ width: FIELD_WIDTH }}
        control={control}
        name="weight"
        label="Weight (g)"
        error={!!errors.weight}
        helperText={errors.weight?.message ?? MOCK_GAP}
        thousandSeparator={true}
        endAdornment={GramEndAdornment}
      />

      <FormattedNumberInput
        sx={{ width: FIELD_WIDTH }}
        control={control}
        name="cookTimeInMinutes"
        label="Cooking Time (m)"
        error={!!errors.cookTimeInMinutes}
        helperText={errors.cookTimeInMinutes?.message ?? MOCK_GAP}
        endAdornment={<AddDishFormFieldEndAdornment text="sec" />}
      />

      <Typography variant="body2">Nutrition Facts (optional)</Typography>

      <Stack direction="row" spacing={1} sx={{ width: FIELD_WIDTH, mt: 1 }}>
        <FormattedNumberInput
          sx={{ width: '50%' }}
          control={control}
          name="nutrition.calories"
          label="Calories"
          error={!!errors['nutrition.calories']}
          helperText={errors['nutrition.calories']?.message ?? MOCK_GAP}
          thousandSeparator={true}
          endAdornment={<AddDishFormFieldEndAdornment text="cal" />}
        />
        <FormattedNumberInput
          control={control}
          name="nutrition.protein"
          label="Protein  (g)"
          error={!!errors['nutrition.protein']}
          helperText={errors['nutrition.protein']?.message ?? MOCK_GAP}
          endAdornment={GramEndAdornment}
        />
      </Stack>

      <Stack direction="row" spacing={1} sx={{ width: FIELD_WIDTH }}>
        <FormattedNumberInput
          sx={{ width: '50%' }}
          control={control}
          name="nutrition.fats"
          label="Fats (g)"
          error={!!errors['nutrition.fats']}
          helperText={errors['nutrition.fats']?.message ?? MOCK_GAP}
          endAdornment={GramEndAdornment}
        />
        <FormattedNumberInput
          control={control}
          name="nutrition.carbohydrates"
          label="Carbohydrates (g)"
          error={!!errors['nutrition.carbohydrates']}
          helperText={errors['nutrition.carbohydrates']?.message ?? MOCK_GAP}
          endAdornment={GramEndAdornment}
        />
      </Stack>
    </>
  );
};

AddDishFormStepFour.propTypes = {
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
};
