import { Step, StepLabel, Stepper } from '@mui/material';

import PropTypes from 'prop-types';

const steps = ['Main information', 'Additional information', 'Other options'];

export const AddDishFormStepper = ({ step }) => {
  const countSteps = () => {
    if (step < 3) {
      return step - 1;
    } else {
      return step;
    }
  };

  return (
    <Stepper activeStep={countSteps()}>
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
