/* eslint-disable react/prop-types */
import { Stack, Typography } from '@mui/material';

import { AppSpiceLevel } from '@/shared/AppSpiceLevel/AppSpiceLevel';

const spiceLevelText = ['Not Spicy', 'A little Spicy', 'Spicy', 'Very Spicy'];

export const DishOrderCardSpiceLevel = ({ spiceLevel }) => {
  return (
    <>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
        Spice level
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <AppSpiceLevel value={spiceLevel} />
        <Typography variant="body2">{spiceLevelText[spiceLevel]}</Typography>
      </Stack>
    </>
  );
};
