import { useEffect, useState } from 'react';
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

import { MOCK_GAP } from './AddDishForm';
import { AddDishFormSpiceLevel } from './AddDishFormSpiceLevel/AddDishFormSpiceLevel';

export const AddDishFormStepTwo = ({ errors, control }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch('data/ingredients.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Controller
        name="ingredients"
        control={control}
        render={({ field }) => (
          <Autocomplete
            sx={{ width: '300px' }}
            multiple
            loading={loading}
            options={options.map((option) => option.ttl)}
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
                  placeholder="Select ingredients please"
                  error={!!errors.ingredients}
                  helperText={errors.ingredients?.message ?? MOCK_GAP}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {field.value.map((ingredient, index) => (
                          <Chip
                            key={index}
                            label={ingredient}
                            onDelete={() => handleDelete(ingredient)}
                            sx={{ margin: 0.5 }}
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
        )}
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

      <AddDishFormSpiceLevel
        control={control}
        name="spiceLevel"
        error={errors.spiceLevel}
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
