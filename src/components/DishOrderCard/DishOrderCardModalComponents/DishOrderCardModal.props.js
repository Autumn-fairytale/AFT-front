import PropTypes from 'prop-types';

export const DishOrderCardModalProps = {
  dishId: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool,
  closeModalHandler: PropTypes.bool,
};
