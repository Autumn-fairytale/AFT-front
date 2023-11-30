import { useForm } from 'react-hook-form';

import { chefSchema } from '@/schemas/chefSchema';
import { AppButton } from '@/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import ChefInfo from './ChefInfo/ChefInfo';

const CreateChefForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(chefSchema),
  });

  const formSubmitHandler = async (data) => {
    try {
      const result = {
        //userId:
        avatar: data.avatar,
        phoneNumber: data.phoneNumber,
        address: data.address,
        certificate: data.certificate,
        accountStatus: data.accountStatus,
      };
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <ChefInfo control={control} errors={errors} />
      <AppButton
        label="Submit"
        type="submit"
        sx={{ width: '400px', margin: '10px auto 50px auto', display: 'block' }}
      />
    </form>
  );
};

export default CreateChefForm;
