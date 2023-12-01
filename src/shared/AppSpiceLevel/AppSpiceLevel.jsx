import RepartitionRoundedIcon from '@mui/icons-material/RepartitionRounded';
import PepperIcon from '@mui/icons-material/Whatshot';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import { AppSpiceLevelProps } from './AppSpiceLevel.props';
import { AppSpiceLevelStyled } from './AppSpiceLevelStyled';

export const AppSpiceLevel = ({
  value = 0,
  onChange = () => {},
  fontSize = 'inherit',
  readOnly = true,
  color = '',
  ...restProps
}) => {
  const handleReset = () => {
    onChange(0);
  };
  const showIcon = !readOnly && value > 0;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {showIcon && (
        <IconButton
          onClick={handleReset}
          size="small"
          className="reset-button"
          sx={{ position: 'absolute', right: 75 }}
        >
          <RepartitionRoundedIcon fontSize={'inherit'} />
        </IconButton>
      )}
      <AppSpiceLevelStyled
        value={value}
        onChange={(_e, newValue) => {
          console.log(newValue);
          onChange(newValue);
        }}
        precision={1}
        max={3}
        icon={<PepperIcon fontSize={fontSize} />}
        emptyIcon={<PepperIcon fontSize={fontSize} />}
        readOnly={readOnly}
        color={color}
        {...restProps}
      />
    </Box>
  );
};

AppSpiceLevel.propTypes = AppSpiceLevelProps;
