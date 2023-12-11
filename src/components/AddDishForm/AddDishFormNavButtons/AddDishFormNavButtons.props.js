import { PropTypes } from 'prop-types';

export const AddDishFormNavButtonsProps = {
  step: PropTypes.number.isRequired,
  onPreviousStep: PropTypes.func.isRequired,
  onNextStep: PropTypes.func.isRequired,
  totalSteps: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};
