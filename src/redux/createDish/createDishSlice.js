import { dishFormDefaultValues } from '@/constants/defaultValues';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dishFormData: dishFormDefaultValues,
  currentStep: 1,
};

export const createDishSlice = createSlice({
  name: 'createDish',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const newData = structuredClone(action.payload);

      state.dishFormData = { ...state.dishFormData, ...newData };
    },
    updateCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetFormData: (state) => {
      state.dishFormData = initialState.dishFormData;
      state.currentStep = initialState.currentStep;
    },
  },
});

export const { updateFormData, updateCurrentStep, resetFormData } =
  createDishSlice.actions;

export default createDishSlice.reducer;
