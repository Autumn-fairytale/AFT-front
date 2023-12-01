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
      state.dishFormData = { ...state.dishFormData, ...action.payload };
    },
    updateCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetFormData: () => initialState,
  },
});

export const { updateFormData, updateCurrentStep, resetFormData } =
  createDishSlice.actions;

export default createDishSlice.reducer;
