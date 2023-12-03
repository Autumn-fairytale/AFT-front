import { useCallback, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Controller } from 'react-hook-form';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import axios from 'axios';
import PropTypes from 'prop-types';

import getCroppedImg from '../crop/getCroppedImage';
import { HelperText } from '../HelperText';
import {
  SpinnerImageUploadContainer,
  StyledCropperBox,
  StyledImageUploadPaper,
} from './AddDishFormImageUpload.styled';

export const AddDishFormImageUpload = ({ control, setValue }) => {
  const getPresignedUrl = async (fileName, fileType) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/s3/s3-presigned-url`,
        {
          params: { fileName, fileType },
        }
      );

      return response.data.url;
    } catch (error) {
      console.error('Error getting pre-signed URL:', error);
      throw error;
    }
  };

  const fetchBlobFromUrl = async (url) => {
    const response = await axios.get(url, { responseType: 'blob' });
    if (response.status !== 200) {
      throw new Error('Error fetching Blob');
    }
    return response.data;
  };

  const uploadBlobToS3 = async (blob, presignedUrl) => {
    const response = await axios.put(presignedUrl, blob, {
      headers: {
        'Content-Type': 'image/png',
      },
    });
    if (response.status !== 200) {
      throw new Error('Error uploading image to S3');
    }
    console.log('Image successfully uploaded to S3');
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [presignedUrl, setPresignedUrl] = useState(null);

  const fileInputRef = useRef();

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleImageChange = async (e, onChange) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        console.log('too big');
        return;
      }
      if (!file.type.startsWith('image/')) {
        console.log('not an image');
        return;
      }

      setIsLoading(true);

      try {
        const signedUrl = await getPresignedUrl(file.name, file.type);
        console.log('Received presigned URL:', signedUrl);

        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
          setShowCropper(true);
        };
        reader.readAsDataURL(file);

        setPresignedUrl(signedUrl);
        console.log('File for upload:', file);
        onChange(file);
      } catch (error) {
        console.error('Error pre-signed URL:', error);
        setIsLoading(false);
      }
    }
  };

  const handleSave = async () => {
    setIsLoading(true);

    try {
      let croppedImageBlob = await getCroppedImg(imageSrc, croppedArea);
      setValue('image', croppedImageBlob);

      const blob = await fetchBlobFromUrl(croppedImageBlob);
      await uploadBlobToS3(blob, presignedUrl);
    } catch (error) {
      console.error(error.message || 'Error during image processing');
    } finally {
      setShowCropper(false);
      setIsLoading(false);
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
            <StyledImageUploadPaper>
              {isLoading && (
                <SpinnerImageUploadContainer>
                  <CircularProgress />
                </SpinnerImageUploadContainer>
              )}
              {!image && (
                <label htmlFor="image-upload">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{ width: 250, height: 250 }}
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
            </StyledImageUploadPaper>
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
                  <StyledCropperBox>
                    <Cropper
                      image={imageSrc}
                      crop={crop}
                      aspect={3 / 2}
                      onCropChange={setCrop}
                      onCropComplete={onCropComplete}
                    />
                  </StyledCropperBox>
                  <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                    sx={{ marginTop: 2 }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleCancel}
                      sx={{ width: 75 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleSave}
                      sx={{ width: 100 }}
                    >
                      Save
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
