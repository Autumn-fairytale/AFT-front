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
import { AppButton } from '@/shared';
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

  const currentStep = useSelector(selectCurrentStep);

  const totalSteps = 4;

  const [editMode, setEditMode] = useState(false);

  const { data } = useFetchDish(dishId);

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

  const handleBackClick = () => {
    dispatch(resetFormData());
    navigate(-1);
  };

  const savedFormData = useSelector(selectSavedFormData);

  useEffect(() => {
    if (dishId && data) {
      const ingredientIds = data.ingredients.map((ingredient) => ingredient.id);
      const owner = data.owner.id;

      const formData = {
        ...data,
        ingredients: ingredientIds,
        owner,
      };

      reset(formData);
      setEditMode(true);
    } else if (savedFormData) {
      reset(savedFormData);
    }
  }, [dishId, data, reset, savedFormData]);

  const onNextStep = async () => {
    const fieldsToValidate = stepValidationFields[currentStep] || [];
    const isFormValid = await trigger(fieldsToValidate);

    if (isFormValid) {
      const currentFormData = getValues();
      dispatch(updateFormData(currentFormData));
      dispatch(updateCurrentStep(currentStep + 1));
    }
  };

  const onPreviousStep = () => {
    dispatch(updateCurrentStep(currentStep - 1));
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
        await dispatch(updateDishData({ dishId, formData })).unwrap();
        toast.success('Dish updated successfully!');
      } else {
        await dispatch(submitDishData(formData)).unwrap();
        toast.success('Dish created successfully!');
      }

      dispatch(updateCurrentStep(1));

      reset();

      navigate('/chef-account/dishes');
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
    dispatch(updateCurrentStep(1));
  };

  return (
    <StyledAddDishContainer>
      <AddDishFormStepper step={currentStep} />

      <StyledAddDishFormBox component={'form'} onSubmit={handleSubmit(Submit)}>
        {editMode && (
          <AppButton
            style={{
              position: 'absolute',
              top: -60,
              left: -160,
            }}
            onClick={handleBackClick}
            label={'Back to dishes'}
            size="small"
            variant="outlined"
          />
        )}

        {currentStep === 1 && (
          <AddDishFromStepOne
            control={control}
            errors={errors}
            register={register}
          />
        )}

        {currentStep === 2 && (
          <AddDishFormStepTwo errors={errors} control={control} />
        )}

        {currentStep === 3 && (
          <AddDishFormStepThree
            register={register}
            errors={errors}
            control={control}
            setValue={setValue}
          />
        )}

        {currentStep === 4 && (
          <AddDishFormStepFour control={control} errors={errors} />
        )}

        <AddDishFormNavButtons
          step={currentStep}
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
