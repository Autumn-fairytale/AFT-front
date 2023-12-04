import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledImageUploadPaper = styled(Paper)({
  position: 'relative',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '255px',
  minWidth: '300px',
  width: '400px',
  height: '266px',
});

export const SpinnerImageUploadContainer = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const StyledCropperBox = styled(Box)({
  position: 'relative',
  height: 400,
  width: '600px',
  maxWidth: '90vw',
});
