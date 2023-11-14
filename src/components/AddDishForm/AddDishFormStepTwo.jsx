import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import {
  Autocomplete,
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  //   Tooltip,
} from '@mui/material';

import PropTypes from 'prop-types';

import { MOCK_GAP } from './AddDishForm';
import { ImageUpload } from './ImagePicker';

export const AddDishFormStepTwo = ({
  register,
  errors,
  onNextStep,
  onPreviousStep,
  control,
}) => {
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
      <ImageUpload />
      <TextField
        sx={{ width: '300px' }}
        {...register('description')}
        label="Description"
        error={!!errors.description}
        helperText={errors.description?.message ?? MOCK_GAP}
        multiline
        rows={2}
      />

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
          //   <Tooltip title="Select if the dish does not contain meat, eggs, dairy products, and other animal-derived ingredients.">
          <FormControlLabel
            control={
              <Switch
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
              />
            }
            label="Vegan/Vegetarian-friendly"
          />
          //   </Tooltip>
        )}
      />

      <Stack direction="row">
        <Button onClick={onPreviousStep}>Back</Button>
        <Button onClick={onNextStep}>Next</Button>
      </Stack>
    </>
  );
};

AddDishFormStepTwo.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onNextStep: PropTypes.func.isRequired,
  onPreviousStep: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired,
};
