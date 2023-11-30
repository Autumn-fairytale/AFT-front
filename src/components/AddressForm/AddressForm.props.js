import { Box } from '@mui/material';

import PropTypes from 'prop-types';

export const AddressFormPropTypes = {
  ...Box.propTypes,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
