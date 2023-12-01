import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import debounce from 'lodash.debounce';

import { dishFormDefaultValues as defaultValues } from '@/constants/defaultValues';
import {
  selectCurrentStep,
  selectSavedFormData,
  updateCurrentStep,
  updateFormData,
} from '@/redux/createDish';
import { dishSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddDishFormNavButtons } from '../AddDishForm';
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

  const savedFormData = useSelector(selectSavedFormData);

  const {
    register,
    trigger,
    reset,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
    control,
    watch,
  } = useForm({
    resolver: zodResolver(dishSchema),
    defaultValues,
    mode: 'onChange',
  });

  const watchedFields = watch();

  const debouncedUpdateFormData = debounce((newData) => {
    dispatch(updateFormData(newData));
  }, 500);

  useEffect(() => {
    if (watchedFields) {
      debouncedUpdateFormData(watchedFields);
    }

    return () => {
      debouncedUpdateFormData.cancel();
    };
  }, [watchedFields, dispatch, debouncedUpdateFormData]);

  useEffect(() => {
    if (savedFormData) {
      reset(savedFormData);
    }
  }, [reset, savedFormData]);

  useEffect(() => {
    dispatch(updateCurrentStep(step));
  }, [step, dispatch]);

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
