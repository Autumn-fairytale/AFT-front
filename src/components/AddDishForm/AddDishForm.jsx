import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { dishFormDefaultValues as defaultValues } from '@/constants/defaultValues';
import { FOLDERS } from '@/constants/mocks';
import { deleteFile } from '@/helpers/deleteFile';
import { extractFileNameFromUrl } from '@/helpers/extractFileNameFromUrl';
import { useFetchDish } from '@/hooks';
import {
  resetFormData,
  selectCurrentStep,
  selectDishImage,
  selectSavedFormData,
  submitDishData,
  updateCurrentStep,
  updateDishData,
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: dishId } = useParams();

  const savedCurrentStep = useSelector(selectCurrentStep);
  const [step, setStep] = useState(savedCurrentStep || 1);
  const totalSteps = 4;

  const [editMode, setEditMode] = useState(false);

  const { data, isLoading, error } = useFetchDish(dishId);

  const {
    register,
    trigger,
    reset,
    setValue,
    handleSubmit,
    getValues,
    formState: { errors },
    clearErrors,
    control,
  } = useForm({
    resolver: zodResolver(dishSchema),
    defaultValues,
    mode: 'onChange',
  });

  useEffect(() => {
    if (dishId && !isLoading && !error && data) {
      const ingredientIds = data.ingredients.map((ingredient) => ingredient.id);
      const owner = data.owner.id;

      const formData = {
        ...data,
        ingredients: ingredientIds,
        owner,
      };

      reset(formData);
      setEditMode(true);
    }
  }, [dishId, data, isLoading, error, reset]);

  const savedFormData = useSelector(selectSavedFormData);

  useEffect(() => {
    if (savedFormData) {
      reset(savedFormData);
    }
  }, [reset, savedFormData]);

  useEffect(() => {
    setStep(savedCurrentStep);
  }, [savedCurrentStep]);

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

  useEffect(() => {
    if (dishId) {
      setEditMode(true);
    }
  }, [dishId]);

  const Submit = async () => {
    const formData = getValues();
    try {
      if (editMode) {
        const dishData = formData;
        await dispatch(updateDishData({ dishId, dishData })).unwrap();
        dispatch(resetFormData());

        toast.success('Dish updated successfully!');
        setStep(1);
        reset();

        navigate('/chef-account/dishes');
      } else {
        await dispatch(submitDishData(formData)).unwrap();

        toast.success('Dish created successfully!');

        setStep(1);
        reset();

        navigate('/chef-account/dishes');
      }
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  const dishImageURL = useSelector(selectDishImage);

  const onResetForm = async () => {
    if (dishImageURL) {
      const fileName = extractFileNameFromUrl(dishImageURL);
      await deleteFile(fileName, FOLDERS.DISHES);
    }
    dispatch(resetFormData());
    reset();
    clearErrors();
    setStep(1);
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
          onReset={onResetForm}
        />
      </StyledAddDishFormBox>
    </StyledAddDishContainer>
  );
};

AddDishForm.propTypes = {
  dishId: PropTypes.string,
};
