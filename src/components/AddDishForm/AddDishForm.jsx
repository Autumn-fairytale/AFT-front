import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Container } from '@mui/material';

import { dishSchema } from '@/schemas/dishSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddDishFromStepOne } from './AddDishFormStepOne';
import { AddDishFormStepThree } from './AddDishFormStepThree';
import { AddDishFormStepTwo } from './AddDishFormStepTwo';

export const MOCK_GAP = ' ';
// todo - progress-bar
export const AddDishForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({});

  const defaultValues = {
    name: '',
    price: '',
    cuisine: '',
    category: '',
    description: '',
    ingredients: [],
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
    let fieldsToValidate = [];
    switch (step) {
      case 1:
        fieldsToValidate = ['name', 'price', 'cuisine', 'category'];
        break;
      case 2:
        fieldsToValidate = ['description', 'ingredients'];
        break;
    }

    const isFormValid = await trigger(fieldsToValidate);

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
          {step === 2 && (
            <AddDishFormStepTwo
              register={register}
              errors={errors}
              onNextStep={onNextStep}
              onPreviousStep={onPreviousStep}
              control={control}
            />
          )}

          {step === 3 && (
            <AddDishFormStepThree
              onPreviousStep={onPreviousStep}
              onSubmit={handleSubmit(onSubmit)}
            />
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
  9 weight
  10 cookingTime
  11 nutrition facts
  12 spiceLevel
  12 isAvailable

  
  */
