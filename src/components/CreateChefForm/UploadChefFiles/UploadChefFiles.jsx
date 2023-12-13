import { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

import { fetchBlobFromUrl } from '@/components/AddDishForm/addDishHelpers/fetchBlobFromUrl';
import { FileType, MAX_FILE_SIZE } from '@/constants';
import { deleteFile } from '@/helpers/deleteFile';
import { extractFileNameFromUrl } from '@/helpers/extractFileNameFromUrl';
import { validateFile } from '@/helpers/validateFile';
import { useS3ImageUploader } from '@/hooks';
import { AppModal } from '@/shared/AppModal/AppModal';
import { HelperText } from '../../AddDishForm/HelperText/HelperText';

export const UploadChefFiles = ({
  control,
  setValue,
  isAvatar,
  id,
  initialImage,
  folder,
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentFileName, setCurrentFileName] = useState('');
  const [fileInfo, setFileInfo] = useState({ name: null, type: null });
  const { uploadToS3 } = useS3ImageUploader(
    fileInfo.name,
    fileInfo.type,
    folder
  );
  const fileInputRef = useRef();
  useEffect(() => {
    if (initialImage) {
      const fileName = extractFileNameFromUrl(initialImage);
      setCurrentFileName(fileName);
    }
  }, [initialImage]);

  useEffect(() => {
    if (initialImage) {
      setImageSrc(initialImage);
      setShowImage(false);
    }
  }, [initialImage]);

  const handleImageChange = async (e, onChange) => {
    const file = e.target.files[0];
    if (file) {
      const validation = validateFile(file, {
        maxSize: MAX_FILE_SIZE,
        validTypes: [FileType.IMAGE],
      });
      if (!validation.isValid) {
        return;
      }
      setIsLoading(true);
      setFileInfo({ name: file.name, type: file.type });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setShowImage(true);
      };
      reader.readAsDataURL(file);
      onChange(file);
    }
  };

  const handleSave = async () => {
    try {
      if (currentFileName) {
        await deleteFile(currentFileName, folder);
      }
      const blob = await fetchBlobFromUrl(imageSrc);
      const url = await uploadToS3(blob);
      const fullResponseURL = url.request.responseURL;
      const newFileName = extractFileNameFromUrl(fullResponseURL);
      setCurrentFileName(newFileName);
      const uploadedImageURL = fullResponseURL.split('?')[0];

      setValue(id, uploadedImageURL);

      setImageSrc(uploadedImageURL);
    } catch (error) {
      console.error(error.message || 'Error during image processing');
    } finally {
      setShowImage(false);
      setIsLoading(false);
    }
  };

  const handleDelete = async (image, onChange) => {
    if (currentFileName) {
      await deleteFile(currentFileName, folder);
    }
    if (image) {
      URL.revokeObjectURL(image);
    }
    setImageSrc(null);
    setValue(id, '');
    setShowImage(false);
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCancel = () => {
    setShowImage(false);
    if (imageSrc) {
      URL.revokeObjectURL(imageSrc);
    }
    setImageSrc(null);
    setValue(id, '');
    setIsLoading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setShowImage(false);
  };
  return (
    <Controller
      control={control}
      name={id}
      rules={{
        required: true,
      }}
      render={({
        field: { onChange, value: image },
        fieldState: { error },
      }) => (
        <>
          <input
            accept="image/*"
            type="file"
            name={id}
            style={{ display: 'none' }}
            id={id}
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
                width: isAvatar ? 340 : 620,
                height: isAvatar ? 340 : 420,
                borderRadius: isAvatar ? '50%' : '20px',
                margin: isAvatar ? 'auto' : 0,
              }}
            >
              {!image && (
                <label htmlFor={id}>
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
              {image && !isLoading && (
                <>
                  <Card
                    component="img"
                    src={imageSrc}
                    alt="Image Preview"
                    sx={{
                      width: isAvatar ? 270 : 570,
                      height: isAvatar ? 270 : 370,
                      objectFit: 'cover',
                      borderRadius: isAvatar ? '50%' : '20px',
                      margin: isAvatar ? 'auto' : 0,
                    }}
                  />
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(image, onChange)}
                    sx={{
                      position: 'absolute',
                      top: isAvatar ? 0 : 1,
                      right: isAvatar ? 150 : 1,
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <label htmlFor={id}>
                    <IconButton
                      color="primary"
                      component="span"
                      sx={{
                        position: 'absolute',
                        bottom: isAvatar ? 0 : 1,
                        right: isAvatar ? 150 : 1,
                      }}
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
            {showImage && (
              <AppModal
                onClose={() => handleCancel()}
                //onClose={() => setShowImage(false)}
                isOpen={showImage}
              >
                <Box
                  width={isAvatar ? '500px' : '620px'}
                  height={isAvatar ? '400px' : '450px'}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap="30px"
                >
                  {isAvatar ? (
                    <Avatar
                      alt={id}
                      src={imageSrc}
                      sx={{ width: 270, height: 270, variant: 'rounded' }}
                    />
                  ) : (
                    <img
                      alt={id}
                      src={imageSrc}
                      style={{ width: '570px', height: '370px' }}
                    />
                  )}
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
                </Box>
              </AppModal>
            )}
          </Box>
        </>
      )}
    />
  );
};

UploadChefFiles.propTypes = {
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isAvatar: PropTypes.bool,
  initialImage: PropTypes.string,
  folder: PropTypes.string,
};
