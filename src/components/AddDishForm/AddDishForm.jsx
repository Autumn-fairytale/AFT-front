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
    weight: '',
    cookTime: '',
    spiceLevel: 0,
    nutrition: {
      calories: '',
      protein: '',
      fats: '',
      carbohydrates: '',
    },
    isAvailable: true,
  };

  const {
    register,
    trigger,
    // reset,
    setValue,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(dishSchema),
    defaultValues,
    mode: 'onChange',
  });
  console.log(errors);
  const onNextStep = async () => {
    let fieldsToValidate = [];
    switch (step) {
      case 1:
        fieldsToValidate = ['name', 'price', 'cuisine', 'category'];
        break;
      case 2:
        fieldsToValidate = ['description', 'ingredients', 'isVegan', 'image'];
        break;
      case 3:
        fieldsToValidate = ['weight', 'cookTime', 'spiceLevel', 'isAvailable'];
    }

    const isFormValid = await trigger(fieldsToValidate);

    if (isFormValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const onPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const Submit = (data) => {
    console.log(data);
    // reset();
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
          onSubmit={handleSubmit(Submit)}
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
            />
          )}
          {step === 2 && (
            <AddDishFormStepTwo
              register={register}
              errors={errors}
              control={control}
              setValue={setValue}
            />
          )}

          {step === 3 && (
            <AddDishFormStepThree control={control} errors={errors} />
          )}
          <AddDishFormNavButtons
            step={step}
            onPreviousStep={onPreviousStep}
            onNextStep={onNextStep}
            totalSteps={3}
          />
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
done but must change image picker and refactor some code
  
  
third step Optional
  9 weight
  10 cookingTime
  11 nutrition facts
  12 spiceLevel
  12 isAvailable

  
  */
