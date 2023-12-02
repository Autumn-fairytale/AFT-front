import { useCallback, useEffect, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Controller } from 'react-hook-form';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Card,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { CircularProgress } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import PropTypes from 'prop-types';

import getCroppedImg from '../crop/getCroppedImage';
import { HelperText } from '../HelperText';

export const AddDishFormImageUpload = ({ control, setValue }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef();

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleImageChange = (e, onChange) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
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
    setIsLoading(true);
    try {
      let croppedImageURL = await getCroppedImg(imageSrc, croppedArea);
      // console.log(croppedImageURL);
      setValue('image', croppedImageURL);

      setShowCropper(false);
    } catch (e) {
      console.error('Error', e);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(isLoading), [isLoading];
  });

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
    setIsLoading(false);
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
          <Box>
            <Paper
              variant="outlined"
              sx={{
                position: 'relative',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxHeight: 255,
                minWidth: 300,
                width: 400,
                height: 266,
              }}
            >
              {isLoading && (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
              {!image && (
                <label htmlFor="image-upload">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{ width: 300, height: 250 }}
                  >
                    <AddPhotoAlternateIcon style={{ fontSize: 80 }} />
                  </IconButton>
                </label>
              )}
              {image && !isLoading && (
                <>
                  <Card
                    component="img"
                    src={image}
                    alt="Image Preview"
                    sx={{ width: 300, height: 200 }}
                  />
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(image, onChange)}
                    sx={{ position: 'absolute', top: 2, right: 2 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <label htmlFor="image-upload">
                    <IconButton
                      color="primary"
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
              <HelperText text={error?.message} isError={!!error?.message} />
            </Typography>
            {showCropper && (
              <Dialog
                open={showCropper}
                onClose={() => setShowCropper(false)}
                maxWidth="lg"
              >
                <DialogContent>
                  <Box
                    sx={{
                      position: 'relative',
                      height: 400,
                      width: '600px',
                      maxWidth: '90vw',
                    }}
                  >
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      aspect={3 / 2}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                    />
                  </Box>
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    sx={{ marginTop: 2 }}
                  >
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

AddDishFormImageUpload.propTypes = {
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};
