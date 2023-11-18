import { Controller } from 'react-hook-form';

import { Autocomplete, Stack, TextField } from '@mui/material';

import PropTypes from 'prop-types';

import { CATEGORIES, CUISINES } from '@/constants';
import { FIELD_WIDTH, MOCK_GAP } from '../../AddDishForm';
import { FormattedNumberInput } from '../../FormattedNumberInput';

const isOptionEqual = (option, value) => {
  return option === value || value === '';
};

export const AddDishFromStepOne = ({ register, errors, control }) => {
  return (
    <>
      <Stack spacing={1}>
        <TextField
          size="normal"
          sx={{ width: FIELD_WIDTH }}
          {...register('name')}
          autoComplete="off"
          label="Dish Name"
          error={!!errors.name}
          helperText={errors.name?.message ?? MOCK_GAP}
        />

        <FormattedNumberInput
          sx={{ width: FIELD_WIDTH }}
          control={control}
          name="price"
          label="Price"
          error={!!errors.price}
          helperText={errors.price?.message ?? MOCK_GAP}
          thousandSeparator={true}
          endAdornment={<span>₴</span>}
        />
        <Controller
          name="cuisine"
          control={control}
          render={({ field }) => (
            <Autocomplete
              sx={{ width: FIELD_WIDTH }}
              options={CUISINES}
              getOptionLabel={(option) => option}
              isOptionEqualToValue={isOptionEqual}
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
              sx={{ width: FIELD_WIDTH }}
              {...field}
              options={CATEGORIES}
              getOptionLabel={(option) => option}
              isOptionEqualToValue={isOptionEqual}
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
      </Stack>
    </>
  );
};

AddDishFromStepOne.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
};
