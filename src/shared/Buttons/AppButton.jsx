import { Button } from '@mui/material';

import { PropTypes } from 'prop-types';

import { useTheme } from '@emotion/react';
import { appButtonStyles } from './appButtonStyles';

const AppButton = ({
  type = 'contained',
  label,
  onClick,
  style,
  disabled,
  startIcon,
  endIcon,
  ...other
}) => {
  const theme = useTheme();
  const defaultStyles = appButtonStyles(theme, type);

  return (
    <Button
      onClick={onClick}
      variant={type}
      css={defaultStyles}
      style={style}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      {...other}
    >
      {label}
    </Button>
  );
};

export default AppButton;

AppButton.propTypes = {
  type: PropTypes.oneOf(['contained', 'text', 'outlined']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};
