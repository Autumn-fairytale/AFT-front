import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Container } from '@mui/material';

import { dishFormDefaultValues as defaultValues } from '@/constants/defaultValues';
import { dishSchema } from '@/schemas/dishSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddDishFormNavButtons } from '../AddDishForm';
import { AddDishFormStepper } from './AddDishFromStepper/AddDishFromStepper';
import {
  AddDishFormStepFour,
  AddDishFormStepThree,
  AddDishFormStepTwo,
  AddDishFromStepOne,
} from './AddDishFromSteps';

export const MOCK_GAP = ' ';
export const FIELD_WIDTH = '300px';

export const AddDishForm = () => {
  const [step, setStep] = useState(1);

  const totalSteps = 4;

  const {
    register,
    trigger,
    reset,
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
        fieldsToValidate = [
          'ingredients',
          'isVegan',
          'spiceLevel',
          'isAvailable',
        ];
        break;
      case 3:
        fieldsToValidate = ['description', 'image'];
        break;
      case 4:
        fieldsToValidate = ['weight', 'cookTimeInMinutes', 'nutrition'];
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
    reset();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 5,
        mb: 2,
        height: '585px',
        maxHeight: '80vh',
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
          flexGrow: 1,
        }}
      >
        {step === 1 && (
          <AddDishFromStepOne
            control={control}
            errors={errors}
            register={register}
          />
        )}
        {step === 2 && <AddDishFormStepTwo errors={errors} control={control} />}

        {step === 3 && (
          <AddDishFormStepThree
            register={register}
            errors={errors}
            control={control}
            setValue={setValue}
          />
        )}
        {step === 4 && (
          <AddDishFormStepFour control={control} errors={errors} />
        )}

        <AddDishFormNavButtons
          step={step}
          onPreviousStep={onPreviousStep}
          onNextStep={onNextStep}
          totalSteps={totalSteps}
        />
      </Box>
    </Container>
  );
};
