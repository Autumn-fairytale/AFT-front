import { TextField } from '@mui/material';

import PropTypes from 'prop-types';

import { MOCK_GAP } from './AddDishForm';
import { ImageUpload } from './ImageUpload';

export const AddDishFormStepThree = ({
  register,
  errors,
  control,
  setValue,
}) => {
  return (
    <>
      <ImageUpload control={control} setValue={setValue} />
      <TextField
        sx={{ width: '300px' }}
        {...register('description')}
        label="Description"
        error={!!errors.description}
        helperText={errors.description?.message ?? MOCK_GAP}
        multiline
        rows={2}
      />
    </>
  );
};

AddDishFormStepThree.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};
