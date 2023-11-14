/* eslint-disable no-unused-vars */
import { useState } from 'react';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
// eslint-disable-next-line no-unused-vars
import { Box, Card, IconButton, Paper } from '@mui/material';

// eslint-disable-next-line react/prop-types
export const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setImage({
        preview: URL.createObjectURL(file),
        file: file,
      });
      //   onImageUpload(file);
    }
  };

  const handleImageRemove = () => {
    if (image) URL.revokeObjectURL(image.preview);
    setImage(null);
    // onImageUpload(null);
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 2, mb: 2 }}>
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
        <input
          accept="image/*"
          type="file"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          id="image-upload"
        />
        {!image && (
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
        {image && (
          <>
            <Card
              component="img"
              src={image.preview}
              alt="Image Preview"
              sx={{ maxWidth: 280, maxHeight: 280 }}
            />
            <IconButton
              color="secondary"
              aria-label="delete picture"
              onClick={handleImageRemove}
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
    </Box>
  );
};
