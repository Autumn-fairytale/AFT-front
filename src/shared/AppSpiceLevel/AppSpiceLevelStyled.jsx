import { Rating } from '@mui/material';
import { styled } from '@mui/material';

export const AppSpiceLevelStyled = styled(Rating)(({ theme, color }) => ({
  '& .MuiRating-iconFilled': {
    color: color || theme.palette.spiceLevel,
  },
  '& .MuiRating-iconHover': {
    color: color || theme.palette.spiceLevel,
  },
}));
