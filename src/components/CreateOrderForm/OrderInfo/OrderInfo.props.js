import PropTypes from 'prop-types';

import { CartInfoPropTypes } from '@/components/CartInfo/CartInfo.props';

export const OrderInfoPropTypes = {
  data: CartInfoPropTypes.data,
  isSubmitting: PropTypes.bool.isRequired,
};
