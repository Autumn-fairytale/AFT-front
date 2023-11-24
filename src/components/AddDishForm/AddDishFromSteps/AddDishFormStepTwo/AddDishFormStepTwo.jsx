import { Controller } from 'react-hook-form';

import {
  Autocomplete,
  Box,
  Chip,
  CircularProgress,
  FormControlLabel,
  Switch,
  TextField,
} from '@mui/material';

import PropTypes from 'prop-types';

import { AddDishFormSpiceLevel } from '@/components/AddDishForm';
import { useFetchIngredients } from '@/hooks/useFetchIngredients';
import { FIELD_WIDTH } from '../../AddDishForm';
import { HelperText } from '../../HelperText';

export const AddDishFormStepTwo = ({ errors, control }) => {
  const {
    data: options,
    loading,
    error,
  } = useFetchIngredients('data/ingredients.json');

  error && console.log(error);

  const isOptionExist = options && options.length > 0;

  return (
    <>
      <Controller
        name="ingredients"
        control={control}
        render={({ field }) =>
          isOptionExist && (
            <Autocomplete
              sx={{ width: FIELD_WIDTH }}
              multiple
              loading={loading}
              options={options.map((option) => option.name)}
              getOptionLabel={(option) => option}
              value={field.value}
              onChange={(_, newValue) => {
                field.onChange(newValue);
              }}
              renderInput={(params) => {
                const handleDelete = (chipToDelete) => {
                  const newValues = field.value.filter(
                    (chip) => chip !== chipToDelete
                  );
                  field.onChange(newValues);
                };

                return (
                  <TextField
                    {...params}
                    label="Ingredients"
                    placeholder="Select to pick ingredient"
                    error={!!errors.ingredients}
                    helperText={
                      <HelperText
                        text={errors.ingredients?.message}
                        isError={!!errors.ingredients}
                      />
                    }
                    InputProps={{
                      ...params.InputProps,
                      startAdornment: field.value.length > 0 && (
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1,
                          }}
                        >
                          {field.value.map((ingredient) => (
                            <Chip
                              key={ingredient}
                              label={ingredient}
                              onDelete={() => handleDelete(ingredient)}
                            />
                          ))}
                        </Box>
                      ),
                      endAdornment: (
                        <>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                );
              }}
            />
          )
        }
      />

      <AddDishFormSpiceLevel
        control={control}
        name="spiceLevel"
        error={errors.spiceLevel}
      />

      <Controller
        name="isVegan"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControlLabel
            sx={{ ml: 2, mr: 'auto' }}
            control={
              <Switch
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
              />
            }
            label="Vegan/Vegetarian-friendly"
          />
        )}
      />

      <Controller
        name="isAvailable"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControlLabel
            sx={{ ml: 2, mr: 'auto' }}
            control={
              <Switch
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
              />
            }
            label="Is dish available to order"
          />
        )}
      />
    </>
  );
};

AddDishFormStepTwo.propTypes = {
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
};
