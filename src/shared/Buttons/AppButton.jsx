import { Button } from '@mui/material';
import { styled } from '@mui/material';

import { PropTypes } from 'prop-types';

import { useTheme } from '@emotion/react';
import { appButtonStyles } from './appButtonStyles';

const StyledButton = styled(Button)(({ theme, type }) =>
  appButtonStyles(theme, type)
);

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

  return (
    <StyledButton
      onClick={onClick}
      variant={type}
      style={style}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      theme={theme}
      {...other}
    >
      {label}
    </StyledButton>
  );
};

export default AppButton;

AppButton.propTypes = {
  type: PropTypes.oneOf(['contained', 'text', 'outlined']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

AppButton.defaultProps = {
  onClick: () => {},
};
