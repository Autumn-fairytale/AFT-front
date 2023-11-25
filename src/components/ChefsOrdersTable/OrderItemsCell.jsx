/* eslint-disable react/prop-types */
import { Paper, Stack } from '@mui/material';

export const OrderItemsCell = ({ value }) => (
  <Stack spacing={1}>
    {value.map((item, index) => (
      <Paper
        key={index}
        variant="body2"
        sx={{
          padding: '4px',
          backgroundColor: (theme) => theme.palette.primary.main,
          color: 'white',
        }}
      >
        {`${index + 1}: ${item.name}, psc: ${item.count}`}
      </Paper>
    ))}
  </Stack>
);
