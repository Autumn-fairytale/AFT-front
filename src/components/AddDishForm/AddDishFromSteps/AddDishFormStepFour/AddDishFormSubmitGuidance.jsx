import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FlagIcon from '@mui/icons-material/Flag';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const AddDishFormSubmitGuidance = () => {
  return (
    <Typography
      variant="body1"
      align="center"
      gutterBottom
      component={Stack}
      gap={2}
    >
      <Stack direction="row" spacing={1} justifyContent="center">
        <CheckCircleOutlineIcon color="success" />
        <span>You&apos;re almost there! </span>
      </Stack>
      <Stack direction="row" spacing={1} justifyContent="center">
        <FlagIcon color="secondary" />
        <span>Cross the finish line, hit submit!</span>
      </Stack>
    </Typography>
  );
};
