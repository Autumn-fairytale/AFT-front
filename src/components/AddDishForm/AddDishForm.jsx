import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Container } from '@mui/material';

import { dishSchema } from '@/schemas/dishSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddDishFormNavButtons } from './AddDishFormNavButtons';
import { AddDishFromStepOne } from './AddDishFormStepOne';
import { AddDishFormStepThree } from './AddDishFormStepThree';
import { AddDishFormStepTwo } from './AddDishFormStepTwo';
import { AddDishFormStepper } from './AddDishFromStepper';

export const MOCK_GAP = ' ';
// use  "react-number-format": "^5.3.1",

export const AddDishForm = () => {
  const [step, setStep] = useState(1);

  const defaultValues = {
    name: '',
    price: '',
    cuisine: '',
    category: '',
    description: '',
    ingredients: [],
    isVegan: false,
    image: '',
  };

  const {
    register,
    trigger,
    getValues,
    setValue,
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
        fieldsToValidate = ['description', 'ingredients', 'isVegan', 'image'];
        break;
    }

    const isFormValid = await trigger(fieldsToValidate);

    if (isFormValid) {
      const currentValues = getValues();

      console.log(currentValues);

      setStep((prevStep) => prevStep + 1);
    }
  };

  const onPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <Container>
      <Box
        sx={{
          mt: 5,
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AddDishFormStepper step={step} />
        <Box
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 3,
          }}
        >
          {step === 1 && (
            <AddDishFromStepOne
              control={control}
              errors={errors}
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
              setValue={setValue}
            />
          )}

          {step === 3 && (
            <AddDishFormStepThree
              onPreviousStep={onPreviousStep}
              onSubmit={handleSubmit(onSubmit)}
            />
          )}
        </Box>
        <AddDishFormNavButtons
          step={step}
          onPreviousStep={onPreviousStep}
          onNextStep={onNextStep}
          totalSteps={3}
        />
      </Box>
    </Container>
  );
};

/* Todo:
11 fields
firs step Main information:
  done but need refactoring, too hard to read 

second step Additional information
done but must change image picker and refactor some code
  
  
third step Optional
  9 weight
  10 cookingTime
  11 nutrition facts
  12 spiceLevel
  12 isAvailable

  
  */
