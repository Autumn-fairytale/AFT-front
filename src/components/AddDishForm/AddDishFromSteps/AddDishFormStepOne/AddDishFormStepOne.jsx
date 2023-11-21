import { Controller } from 'react-hook-form';

import { Autocomplete, Stack, TextField } from '@mui/material';

import PropTypes from 'prop-types';

import { CATEGORIES, CUISINES } from '@/constants';
import { FIELD_WIDTH } from '../../AddDishForm';
import { FormattedNumberInput } from '../../FormattedNumberInput';
import { HelperText } from '../../HelperText';

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
          helperText={
            <HelperText text={errors.name?.message} isError={!!errors.name} />
          }
        />

        <FormattedNumberInput
          sx={{ width: FIELD_WIDTH }}
          control={control}
          name="price"
          label="Price ( ₴ )"
          error={!!errors.price}
          helperText={errors.price?.message}
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
                  helperText={
                    <HelperText
                      text={errors.cuisine?.message}
                      isError={!!errors.cuisine}
                    />
                  }
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
                  helperText={
                    <HelperText
                      text={errors.category?.message}
                      isError={!!errors.category}
                    />
                  }
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
