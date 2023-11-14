import { Button } from '@mui/material';

import PropTypes from 'prop-types';

export const AddDishFormStepThree = ({ onPreviousStep, onSubmit }) => {
  return (
    <>
      <Button onClick={onPreviousStep} size="small" sx={{ width: '80px' }}>
        Back
      </Button>
      <Button
        onClick={onSubmit}
        type="submit"
        size="small"
        sx={{ width: '80px' }}
      >
        Submit
      </Button>
    </>
  );
};

AddDishFormStepThree.propTypes = {
  onPreviousStep: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
