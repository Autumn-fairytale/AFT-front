import { Controller } from 'react-hook-form';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Card, IconButton, Paper, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ImageUpload = ({ control }) => {
  const handleImageChange = (file, onChange) => {
    if (file && file.type.startsWith('image/')) {
      const preview = URL.createObjectURL(file);
      onChange(preview);
    } else {
      onChange('');
    }
  };
  return (
    <Controller
      control={control}
      name="image"
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <input
            accept="image/*"
            type="file"
            style={{ display: 'none' }}
            id="image-upload"
            onChange={(e) => {
              handleImageChange(e.target.files[0], onChange);
            }}
            onBlur={onBlur}
          />
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Paper
              variant="outlined"
              sx={{
                position: 'relative',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxHeight: 300,
                minWidth: 300,
                width: 300,
                height: 300,
              }}
            >
              {!value && (
                <label htmlFor="image-upload">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{ width: 250, height: 250 }}
                  >
                    <AddPhotoAlternateIcon style={{ fontSize: 70 }} />
                  </IconButton>
                </label>
              )}
              {value && (
                <>
                  <Card
                    component="img"
                    src={value}
                    alt="Image Preview"
                    sx={{ maxWidth: 280, maxHeight: 280 }}
                  />
                  <IconButton
                    color="secondary"
                    aria-label="delete picture"
                    onClick={() => {
                      URL.revokeObjectURL(value);
                      onChange('');
                    }}
                    sx={{ position: 'absolute', top: 10, right: 10 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <label htmlFor="image-upload">
                    <IconButton
                      color="primary"
                      aria-label="replace picture"
                      component="span"
                      sx={{ position: 'absolute', bottom: 10, right: 10 }}
                    >
                      <AddPhotoAlternateIcon />
                    </IconButton>
                  </label>
                </>
              )}
            </Paper>

            <Typography
              color="error"
              variant="caption"
              sx={{ display: 'block', minHeight: '20px' }}
            >
              {error?.message}
            </Typography>
          </Box>
        </>
      )}
    />
  );
};
