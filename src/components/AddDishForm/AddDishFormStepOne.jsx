import { Controller } from 'react-hook-form';

import { Autocomplete, Button, TextField } from '@mui/material';

import PropTypes from 'prop-types';

import { CATEGORIES, CUISINES } from '@/constants';
import { MOCK_GAP } from './AddDishForm';

export const AddDishFromStepOne = ({
  register,
  errors,
  control,
  onNextStep,
  step,
}) => {
  return (
    <>
      <TextField
        sx={{ width: '300px' }}
        {...register('name')}
        autoComplete="off"
        label="Dish Name"
        error={!!errors.name}
        helperText={errors.name?.message ?? MOCK_GAP}
      />

      <TextField
        sx={{ width: '300px' }}
        {...register('price')}
        label="Price"
        error={!!errors.price}
        helperText={errors.price?.message ?? MOCK_GAP}
        type="number"
      />
      <Controller
        name="cuisine"
        control={control}
        render={({ field }) => (
          <Autocomplete
            sx={{ width: '300px' }}
            options={CUISINES}
            getOptionLabel={(option) => option}
            isOptionEqualToValue={(option, value) =>
              option === value || value === ''
            }
            value={field.value}
            onChange={(_, data) => field.onChange(data ?? '')}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Cuisine"
                error={!!errors.cuisine}
                helperText={errors.cuisine?.message ?? MOCK_GAP}
              />
            )}
          />
        )}
      />

      <Controller
        name="category"
        control={control}
        render={({ field }) => (
          <Autocomplete
            sx={{ width: '300px' }}
            {...field}
            options={CATEGORIES}
            getOptionLabel={(option) => option}
            isOptionEqualToValue={(option, value) =>
              option === value || value === ''
            }
            value={field.value}
            onChange={(_, data) => field.onChange(data ?? '')}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Category"
                variant="outlined"
                error={!!errors.category}
                helperText={errors.category?.message ?? MOCK_GAP}
              />
            )}
          />
        )}
      />

      <Button
        type="button"
        variant="contained"
        onClick={onNextStep}
        size="small"
        sx={{ width: '80px' }}
      >
        Next {step}
      </Button>
    </>
  );
};

AddDishFromStepOne.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  onNextStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
