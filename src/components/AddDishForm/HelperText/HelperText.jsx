import { Typography } from '@mui/material';

import { HelperTextProps } from './HelperText.props';

export const HelperText = ({ text = ' ', isError }) => {
  return (
    <Typography
      variant="body2"
      component="span"
      fontWeight={isError ? '' : 'bold'}
      sx={{
        minHeight: '1.5em',
        display: 'block',
        color: (theme) =>
          isError ? theme.palette.error : theme.palette.success.main,
      }}
    >
      {text}
    </Typography>
  );
};

HelperText.propTypes = HelperTextProps;
