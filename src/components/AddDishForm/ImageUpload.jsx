import { useCallback, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Controller } from 'react-hook-form';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Card, IconButton, Paper, Stack, Typography } from '@mui/material';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import PropTypes from 'prop-types';

import { MOCK_GAP } from './AddDishForm';
import getCroppedImg from './crop/getCroppedImage';

export const ImageUpload = ({ control, setValue }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [showCropper, setShowCropper] = useState(false);

  const fileInputRef = useRef();

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleImageChange = (e, onChange) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const handleSave = async () => {
    try {
      const croppedImageURL = await getCroppedImg(imageSrc, croppedArea);
      // console.log(croppedImageURL);
      setValue('image', croppedImageURL);
      setShowCropper(false);
    } catch (e) {
      console.error('Error', e);
    }
  };

  const handleDelete = (image, onChange) => {
    if (image) {
      URL.revokeObjectURL(image);
    }
    setImageSrc(null);
    setValue('image', '');
    setShowCropper(false);
    onChange('');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCancel = () => {
    setShowCropper(false);
    if (imageSrc) {
      URL.revokeObjectURL(imageSrc);
    }
    setImageSrc(null);
    setValue('image', '');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Controller
      control={control}
      name="image"
      render={({
        field: { onChange, value: image },
        fieldState: { error },
      }) => (
        <>
          <input
            accept="image/*"
            type="file"
            style={{ display: 'none' }}
            id="image-upload"
            ref={fileInputRef}
            onChange={(e) => {
              handleImageChange(e, onChange);
            }}
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
                maxHeight: 225,
                minWidth: 300,
                width: 300,
                height: 225,
              }}
            >
              {!image && (
                <label htmlFor="image-upload">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{ width: 200, height: 200 }}
                  >
                    <AddPhotoAlternateIcon style={{ fontSize: 70 }} />
                  </IconButton>
                </label>
              )}
              {image && (
                <>
                  <Card
                    component="img"
                    src={image}
                    alt="Image Preview"
                    sx={{ maxWidth: 230, maxHeight: 200 }}
                  />
                  <IconButton
                    color="secondary"
                    aria-label="delete picture"
                    onClick={() => handleDelete(image, onChange)}
                    sx={{ position: 'absolute', top: 2, right: 2 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <label htmlFor="image-upload">
                    <IconButton
                      color="primary"
                      aria-label="replace picture"
                      component="span"
                      sx={{ position: 'absolute', bottom: 2, right: 2 }}
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
              {error?.message || MOCK_GAP}
            </Typography>
            {showCropper && (
              <Dialog
                open={showCropper}
                onClose={() => setShowCropper(false)}
                maxWidth="lg"
                fullWidth
                fullScreen
              >
                <DialogContent>
                  <Cropper
                    image={imageSrc}
                    crop={crop}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                    minZoom={0.3}
                    objectFit="vertical-cover"
                  />
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" onClick={handleSave}>
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </DialogContent>
              </Dialog>
            )}
          </Box>
        </>
      )}
    />
  );
};

ImageUpload.propTypes = {
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};
