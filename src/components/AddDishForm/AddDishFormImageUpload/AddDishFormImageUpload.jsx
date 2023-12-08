import { useCallback, useEffect, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

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

import { FileType, MAX_FILE_SIZE } from '@/constants';
import { FOLDERS } from '@/constants/mocks';
import { deleteFile } from '@/helpers/deleteFile';
import { extractFileNameFromUrl } from '@/helpers/extractFileNameFromUrl';
import { validateFile } from '@/helpers/validateFile';
import { useS3ImageUploader } from '@/hooks';
import { selectDishImage, updateFormData } from '@/redux/createDish';
import { fetchBlobFromUrl } from '../addDishHelpers/fetchBlobFromUrl';
import getCroppedImg from '../crop/getCroppedImage';
import { HelperText } from '../HelperText';
import { AddDishFormImageUploadProps } from './AddDishFormImageUpload.props';
import {
  SpinnerImageUploadContainer,
  StyledCropperBox,
  StyledImageUploadPaper,
} from './AddDishFormImageUpload.styled';

export const AddDishFormImageUpload = ({ control, setValue }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileInfo, setFileInfo] = useState({ name: null, type: null });
  const [currentFileName, setCurrentFileName] = useState('');

  const dispatch = useDispatch();
  const dishImageURL = useSelector(selectDishImage);

  useEffect(() => {
    if (dishImageURL) {
      const fileName = extractFileNameFromUrl(dishImageURL);
      setCurrentFileName(fileName);
    }
  }, [dishImageURL]);

  const { uploadToS3, isUploading } = useS3ImageUploader(
    fileInfo.name,
    fileInfo.type,
    FOLDERS.DISHES,
    fileInfo.fileSize
  );

  const fileInputRef = useRef();

  const onCropComplete = useCallback((_croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleImageChange = async (e, onChange) => {
    const file = e.target.files[0];
    if (file) {
      const validation = validateFile(file, {
        maxSize: MAX_FILE_SIZE,
        validTypes: [FileType.IMAGE],
      });
      console.log(file);
      if (!validation.isValid) {
        return;
      }

      setIsLoading(true);

      setFileInfo({ name: file.name, type: file.type, fileSize: file.size });

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
      if (currentFileName) {
        await deleteFile(currentFileName, FOLDERS.DISHES);
      }

      let croppedImageBlob = await getCroppedImg(imageSrc, croppedArea);

      const blob = await fetchBlobFromUrl(croppedImageBlob);

      const url = await uploadToS3(blob);

      const fullResponseURL = url.request.responseURL;

      const newFileName = extractFileNameFromUrl(fullResponseURL);

      setCurrentFileName(newFileName);

      const uploadedImageURL = fullResponseURL.split('?')[0];

      dispatch(updateFormData({ image: uploadedImageURL }));

      setValue('image', uploadedImageURL);
    } catch (error) {
      console.error(error.message || 'Error during image processing');
    } finally {
      setShowCropper(false);

      setIsLoading(false);
    }
  };

  const handleDelete = async (image, onChange) => {
    if (currentFileName) {
      await deleteFile(currentFileName, FOLDERS.DISHES);
    }

    if (image) {
      URL.revokeObjectURL(image);
    }
    setImageSrc(null);

    setValue('image', '');

    dispatch(updateFormData({ image: '' }));

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
              {isUploading && isLoading && (
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

AddDishFormImageUpload.propTypes = AddDishFormImageUploadProps;
