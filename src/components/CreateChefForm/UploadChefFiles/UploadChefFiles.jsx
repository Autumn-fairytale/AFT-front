import { useRef, useState } from 'react';
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

import { AppModal } from '@/shared/AppModal/AppModal';
import { HelperText } from '../../AddDishForm/HelperText';

export const UploadChefFiles = ({ control, setValue, isAvatar, id }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const fileInputRef = useRef();

  const handleImageChange = (e, onChange) => {
    const file = e.target.files[0];
    if (file) {
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
    setValue(imageSrc);
    setShowImage(false);
  };

  const handleDelete = (image, onChange) => {
    setImageSrc(null);
    setValue({ id }, '');
    setShowImage(false);
    onChange('');
  };

  const handleCancel = () => {
    setImageSrc(null);
    setValue({ id }, '');
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
              {image && (
                <>
                  <Card
                    component="img"
                    src={
                      imageSrc
                        ? imageSrc
                        : isAvatar
                          ? 'https://cdn.stockmediaserver.com/smsimg35/pv/IsignstockContributors/ISS_28329_00657.jpg?token=rbZfChe1pvjPwO_dHbvcKI1E94w5-hd8Mj8K8MKgX9o&class=pv&smss=53&expires=4102358400'
                          : 'https://cdn-payscale.com/content/placeholder-images/certification-placeholder.png'
                    }
                    alt="Image Preview"
                    sx={{
                      width: isAvatar ? 270 : 570,
                      height: isAvatar ? 270 : 370,
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
              <AppModal onClose={() => setShowImage(false)} isOpen={showImage}>
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
              // <Dialog
              //   open={showCropper}
              //   onClose={() => setShowCropper(false)}
              //   maxWidth="sm"
              //   fullWidth
              //   fullScreen
              // >
              //   <DialogContent>
              //     <Cropper
              //       image={imageSrc}
              //       crop={crop}
              //       zoom={zoom}
              //       aspect={4 / 3}
              //       onCropChange={setCrop}
              //       onZoomChange={setZoom}
              //       onCropComplete={onCropComplete}
              //       minZoom={0.3}
              //       objectFit="vertical-cover"
              //     />
              //     <Stack direction="row" spacing={1}>
              //       <Button variant="contained" onClick={handleSave}>
              //         Save
              //       </Button>
              //       <Button
              //         variant="contained"
              //         color="secondary"
              //         onClick={handleCancel}
              //       >
              //         Cancel
              //       </Button>
              //     </Stack>
              //   </DialogContent>
              // </Dialog>
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
};
