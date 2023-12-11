import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const AddressFormItemPropTypes = PropTypes.shape({
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  required: PropTypes.bool,
  sx: PropTypes.object,
});

export const AddressFormPropTypes = {
  ...Box.propTypes,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addressFormItems: PropTypes.arrayOf(AddressFormItemPropTypes),
};
