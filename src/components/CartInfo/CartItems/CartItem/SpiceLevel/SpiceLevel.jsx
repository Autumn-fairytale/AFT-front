import { PiPepper, PiPepperFill } from 'react-icons/pi';

import { Box, useTheme } from '@mui/material';

import { SpiceLevelPropTypes } from './SpiceLevel.props';
import { SpiceLevelStyled } from './SpiceLevel.styled';

const SpiceLevel = ({ value, ...props }) => {
  const theme = useTheme();

  return (
    <SpiceLevelStyled {...props}>
      {Array.from({ length: 3 }, (_, index) => (
        <Box component="li" key={index} sx={{ height: '16px' }}>
          {index < value ? (
            <PiPepperFill color={theme.palette.primary.main} size={16} />
          ) : (
            <PiPepper color={theme.palette.grey[600]} size={16} />
          )}
        </Box>
      ))}
    </SpiceLevelStyled>
  );
};

SpiceLevel.propTypes = SpiceLevelPropTypes;

export default SpiceLevel;
