import { Stack } from '@mui/material';

import { PropTypes } from 'prop-types';

import { AppButton } from '@/shared';

export const AddDishFormNavButtons = ({
  step,
  onPreviousStep,
  onNextStep,
  totalSteps,
}) => {
  return (
    <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
      {step > 1 && <AppButton label="Back" onClick={onPreviousStep} />}
      {step < totalSteps && <AppButton label="Next" onClick={onNextStep} />}
      {step === totalSteps && <AppButton label="Submit" type="submit" />}
    </Stack>
  );
};

AddDishFormNavButtons.propTypes = {
  step: PropTypes.number.isRequired,
  onPreviousStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
  totalSteps: PropTypes.number.isRequired,
};
