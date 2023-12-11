import PropTypes from 'prop-types';

export const AddDishFormStepThreeProps = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};
