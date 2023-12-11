import { TextField } from '@mui/material';

import { AddDishFormImageUpload } from '@/components/AddDishForm';
import { FIELD_WIDTH } from '../../AddDishForm';
import { HelperText } from '../../HelperText/HelperText';
import { AddDishFormStepThreeProps } from './AddDishFromStepOne.props';

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
        rows={6}
      />
    </>
  );
};

AddDishFormStepThree.propTypes = AddDishFormStepThreeProps;
