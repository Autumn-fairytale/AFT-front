import { Step, StepLabel, Stepper } from '@mui/material';

import PropTypes from 'prop-types';

const steps = ['Basics ', 'Details', 'Media', 'Specs'];

export const AddDishFormStepper = ({ step }) => {
  return (
    <Stepper activeStep={step - 1} sx={{ mb: 1 }}>
      {steps.map((label) => {
        const stepProps = {};
        const labelProps = {};

        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

AddDishFormStepper.propTypes = {
  step: PropTypes.number.isRequired,
};
