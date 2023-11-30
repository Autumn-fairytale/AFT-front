/* eslint-disable react/prop-types */
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { Stack, Typography } from '@mui/material';

const spiceLevelText = ['Not Spicy', 'A little Spicy', 'Spicy', 'Very Spicy'];

const spiceIcons = [
  <WhatshotIcon color="disabled" key={'disabled'} />,
  <WhatshotIcon color="success" key={'success'} />,
  <WhatshotIcon color="warning" key={'warning'} />,
  <WhatshotIcon color="error" key={'error'} />,
];

export const DishOrderCardSpiceLevel = ({ spiceLevel }) => {
  return (
    <>
      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
        Spice level
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        {spiceIcons[spiceLevel]}
        <Typography variant="body2">{spiceLevelText[spiceLevel]}</Typography>
      </Stack>
    </>
  );
};
