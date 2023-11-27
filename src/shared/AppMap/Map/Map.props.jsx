import PropTypes from 'prop-types';

export const MapPropTypes = {
  containerStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  zoom: PropTypes.number,
};
