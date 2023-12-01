import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { dishFormDefaultValues as defaultValues } from '@/constants/defaultValues';
import {
  resetFormData,
  selectCurrentStep,
  selectSavedFormData,
  updateCurrentStep,
  updateFormData,
} from '@/redux/createDish';
import { dishSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddDishFormNavButtons } from '../AddDishForm';
import { stepValidationFields } from './addDishFormHelpers';
import {
  StyledAddDishContainer,
  StyledAddDishFormBox,
} from './AddDishFormStyled';
import { AddDishFormStepper } from './AddDishFromStepper/AddDishFromStepper';
import {
  AddDishFormStepFour,
  AddDishFormStepThree,
  AddDishFormStepTwo,
  AddDishFromStepOne,
} from './AddDishFromSteps';

export const FIELD_WIDTH = '400px';

export const AddDishForm = () => {
  const dispatch = useDispatch();

  const savedCurrentStep = useSelector(selectCurrentStep);
  const [step, setStep] = useState(savedCurrentStep || 1);
  const totalSteps = 4;

  const {
    register,
    trigger,
    reset,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(dishSchema),
    defaultValues,
    mode: 'onChange',
  });

  const savedFormData = useSelector(selectSavedFormData);

  useEffect(() => {
    if (savedFormData) {
      reset(savedFormData);
    }
  }, [reset, savedFormData]);

  // useEffect(() => {
  //   setStep(savedCurrentStep);
  // }, [savedCurrentStep]);

  useEffect(() => {
    if (step !== savedCurrentStep) {
      dispatch(updateCurrentStep(step));
    }
  }, [step, savedCurrentStep, dispatch]);

  const onNextStep = async () => {
    const fieldsToValidate = stepValidationFields[step] || [];

    const isFormValid = await trigger(fieldsToValidate);

    if (isFormValid) {
      const currentFormData = getValues();

      dispatch(updateFormData(currentFormData));

      setStep((prevStep) => prevStep + 1);
    }
  };

  const onPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const Submit = (data) => {
    dispatch(updateFormData(data));

    console.log(data);

    dispatch(resetFormData());
    reset();
  };

  return (
    <StyledAddDishContainer>
      <AddDishFormStepper step={step} />
      <StyledAddDishFormBox component={'form'} onSubmit={handleSubmit(Submit)}>
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
      </StyledAddDishFormBox>
    </StyledAddDishContainer>
  );
};
