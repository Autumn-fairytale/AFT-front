import PropTypes from 'prop-types';

export const OverviewPropTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
