import { Stack } from '@mui/material';

import { PropTypes } from 'prop-types';

import { AppButton } from '@/shared';
import { FIELD_WIDTH } from '..';
import { ResetFormButton } from '../ResetFormButton/ResetFormButton';

export const AddDishFormNavButtons = ({
  step,
  onPreviousStep,
  onNextStep,
  totalSteps,
  onReset,
}) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mt: 'auto',
        position: 'relative',
        width: FIELD_WIDTH,
        justifyContent: 'center',
      }}
    >
      <ResetFormButton onClick={onReset} />
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
  onReset: PropTypes.func.isRequired,
};
