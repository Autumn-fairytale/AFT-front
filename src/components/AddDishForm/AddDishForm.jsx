import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, Container } from '@mui/material';

import { dishSchema } from '@/schemas/dishSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddDishFromStepOne } from './AddDishFormStepOne';

export const MOCK_GAP = ' ';
export const EMPTY_STRING = '';

export const AddDishForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({});

  const defaultValues = {
    name: EMPTY_STRING,
    price: EMPTY_STRING,
    cuisine: EMPTY_STRING,
    category: EMPTY_STRING,
  };

  const {
    register,
    trigger,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(dishSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onNextStep = async () => {
    const isFormValid = await trigger();

    if (isFormValid) {
      const currentValues = getValues();

      setFormData({ ...formData, ...currentValues });

      console.log(currentValues);

      setStep((prevStep) => prevStep + 1);
    }
  };

  const onPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);

    Object.keys(formData).forEach((key) => {
      setValue(key, formData[key]);
    });
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Box
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {step === 1 && (
            <AddDishFromStepOne
              control={control}
              errors={errors}
              onNextStep={onNextStep}
              register={register}
              step={step}
              setStep={setStep}
            />
          )}

          {step > 1 && (
            <>
              <Button
                type="button"
                variant="contained"
                onClick={onPreviousStep}
                size="small"
                sx={{ width: '80px' }}
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={{ width: '80px' }}
              >
                Submit
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

/* Todo:
11 fields
firs step Main information:
  done but need refactoring, too hard to read 

second step Additional information
  5 image
  6 description
  7 ingredients
  8 isVegan
 

third step Optional
  9 cookingTime
  10 allergens
  11 nutrition facts
  
  
  */
