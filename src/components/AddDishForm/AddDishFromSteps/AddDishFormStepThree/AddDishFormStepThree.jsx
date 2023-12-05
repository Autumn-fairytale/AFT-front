import { TextField } from '@mui/material';

import PropTypes from 'prop-types';

import { AddDishFormImageUpload } from '@/components/AddDishForm';
import { FIELD_WIDTH } from '../../AddDishForm';
import { HelperText } from '../../HelperText';

export const AddDishFormStepThree = ({
  register,
  errors,
  control,
  setValue,
}) => {
  return (
    <>
      <AddDishFormImageUpload control={control} setValue={setValue} />
      <TextField
        sx={{ width: FIELD_WIDTH }}
        {...register('description')}
        label="Description"
        error={!!errors.description}
        helperText={
          <HelperText
            text={errors.description?.message}
            isError={!!errors.description}
          />
        }
        multiline
        rows={5}
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
