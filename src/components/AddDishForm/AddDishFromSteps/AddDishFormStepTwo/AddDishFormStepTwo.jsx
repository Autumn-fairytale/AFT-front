import { Controller } from 'react-hook-form';

import {
  Autocomplete,
  Box,
  Card,
  Chip,
  CircularProgress,
  FormControlLabel,
  Switch,
  TextField,
} from '@mui/material';

import { AddDishFormSpiceLevel } from '@/components/AddDishForm';
import { useFetchIngredients } from '@/hooks/useFetchIngredients';
import { FIELD_WIDTH } from '../../AddDishForm';
import { HelperText } from '../../HelperText/HelperText';
import { AddDishFormStepTwoProps } from './AddDishFormStepTwo.props';

export const AddDishFormStepTwo = ({ errors, control }) => {
  const { data: options, loading, error } = useFetchIngredients();

  error && console.log(error);

  const isOptionExist = options && options.length > 0;
  return (
    <>
      <Controller
        name="ingredients"
        control={control}
        render={({ field }) =>
          isOptionExist && (
            <Box sx={{ width: FIELD_WIDTH }}>
              <Autocomplete
                multiple
                loading={loading}
                options={options}
                getOptionLabel={(option) => option.name}
                value={options.filter((option) =>
                  field.value.includes(option.id)
                )}
                onChange={(_, newValue) => {
                  field.onChange(newValue.map((option) => option.id));
                }}
                renderTags={() => null}
                renderInput={(params) => (
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
                      endAdornment: (
                        <>
                          {loading && (
                            <CircularProgress color="inherit" size={20} />
                          )}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
              <Card
                elevation={3}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                  p: 1,
                  minHeight: 250,
                  alignContent: 'flex-start',
                  backgroundColor: 'inherit',
                }}
              >
                {field.value.map((ingredientId) => {
                  const ingredient = options.find(
                    (opt) => opt.id === ingredientId
                  );

                  return (
                    <Chip
                      key={ingredientId}
                      label={ingredient?.name ?? ''}
                      sx={{
                        bgcolor: 'primary.light',
                      }}
                      onDelete={() => {
                        const newValues = field.value.filter(
                          (id) => id !== ingredientId
                        );
                        field.onChange(newValues);
                      }}
                    />
                  );
                })}
              </Card>
            </Box>
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

AddDishFormStepTwo.propTypes = AddDishFormStepTwoProps;
