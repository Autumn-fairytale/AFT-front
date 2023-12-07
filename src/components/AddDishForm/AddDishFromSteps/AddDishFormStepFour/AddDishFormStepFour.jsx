import { Stack, Typography } from '@mui/material';

import PropTypes from 'prop-types';

import { FIELD_WIDTH } from '../../AddDishForm';
import { AddDishFormFieldEndAdornment } from '../../AddDishFormFieldEndAdornment/AddDishFormFieldEndAdornment';
import { FormattedNumberInput } from '../../FormattedNumberInput';
import { HelperText } from '../../HelperText';
import { AddDishFormSubmitGuidance } from './AddDishFormSubmitGuidance';

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
        helperText={
          <HelperText text={errors.weight?.message} isError={!!errors.weight} />
        }
        thousandSeparator={true}
        endAdornment={GramEndAdornment}
      />

      <FormattedNumberInput
        sx={{ width: FIELD_WIDTH }}
        control={control}
        name="cookTimeInMinutes"
        label="Cooking Time (m)"
        error={!!errors.cookTimeInMinutes}
        helperText={
          <HelperText
            text={errors.cookTimeInMinutes?.message}
            isError={!!errors.cookTimeInMinutes}
          />
        }
        endAdornment={<AddDishFormFieldEndAdornment text="m" />}
      />

      <Typography variant="body2">Nutrition Facts (optional)</Typography>

      <Stack direction="row" spacing={1} sx={{ width: FIELD_WIDTH, mt: 1 }}>
        <FormattedNumberInput
          sx={{ width: '50%' }}
          control={control}
          name="nutrition.calories"
          label="Calories"
          error={!!errors.nutrition?.calories}
          helperText={
            <HelperText
              text={errors.nutrition?.calories?.message}
              isError={!!errors.nutrition?.calories}
            />
          }
          thousandSeparator={true}
          endAdornment={<AddDishFormFieldEndAdornment text="cal" />}
        />

        <FormattedNumberInput
          control={control}
          name="nutrition.protein"
          label="Protein (g)"
          error={!!errors.nutrition?.protein}
          helperText={
            <HelperText
              text={errors.nutrition?.protein?.message}
              isError={!!errors.nutrition?.protein}
            />
          }
          endAdornment={GramEndAdornment}
        />
      </Stack>

      <Stack direction="row" spacing={1} sx={{ width: FIELD_WIDTH }}>
        <FormattedNumberInput
          sx={{ width: '50%' }}
          control={control}
          name="nutrition.fats"
          label="Fats (g)"
          error={!!errors.nutrition?.fats}
          helperText={
            <HelperText
              text={errors.nutrition?.fats?.message}
              isError={!!errors.nutrition?.fats}
            />
          }
          endAdornment={GramEndAdornment}
        />

        <FormattedNumberInput
          control={control}
          name="nutrition.carbohydrates"
          label="Carbohydrates (g)"
          error={!!errors.nutrition?.carbohydrates}
          helperText={
            <HelperText
              text={errors.nutrition?.carbohydrates?.message}
              isError={!!errors.nutrition?.carbohydrates}
            />
          }
          endAdornment={GramEndAdornment}
        />
      </Stack>
      <AddDishFormSubmitGuidance />
    </>
  );
};

AddDishFormStepFour.propTypes = {
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
};
