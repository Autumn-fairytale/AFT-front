import { Stack } from '@mui/material';

import { AppButton } from '@/shared';
import { FIELD_WIDTH } from '..';
import { ResetFormButton } from '../ResetFormButton/ResetFormButton';
import { AddDishFormNavButtonsProps } from './AddDishFormNavButtons.props';

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

AddDishFormNavButtons.propTypes = AddDishFormNavButtonsProps;
