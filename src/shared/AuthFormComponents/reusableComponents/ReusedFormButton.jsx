import PropTypes from 'prop-types';

import { AppButton } from '@/shared';

export const ReusedSubmitButton = ({ label, styles, ...other }) => (
  <AppButton
    type="submit"
    label={label}
    variant="contained"
    disableElevation={true}
    sx={{ ...styles }}
    {...other}
  />
);

ReusedSubmitButton.propTypes = {
  label: PropTypes.node.isRequired,
  styles: PropTypes.object,
};
