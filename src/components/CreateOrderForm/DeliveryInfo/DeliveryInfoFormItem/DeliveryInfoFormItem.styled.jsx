import PropTypes from 'prop-types';

export const DeliveryInfoFormItemPropTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    sx: PropTypes.object,
  }).isRequired,
  control: PropTypes.object.isRequired,
  error: PropTypes.object,
};
