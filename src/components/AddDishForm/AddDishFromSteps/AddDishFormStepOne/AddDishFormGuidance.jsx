import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Box, Stack, Typography } from '@mui/material';

export const AddDishFormGuidance = () => {
  return (
    <Box sx={{ width: '100%', px: 3 }}>
      <Typography variant="body1" gutterBottom component={Stack} gap={1}>
        <Stack direction="row" spacing={1} alignItems="center">
          <CardGiftcardIcon color="secondary" />
          <span>Fill the fields, create your dish’s story!</span>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <CameraAltIcon color="action" />
          <span>Add a photo, let it shine!</span>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <RestaurantIcon color="primary" />
          <span>Showcase your culinary art!</span>
        </Stack>
      </Typography>
    </Box>
  );
};
