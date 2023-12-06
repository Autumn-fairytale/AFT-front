import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { createChef } from '@/api/chef/createChef';
import { getChefById } from '@/api/chef/getChefById';
import { updateChef } from '@/api/chef/updateChef';
import { route } from '@/constants';
import { addSpacesToPhoneNumber, removeSpacesFromPhoneNumber } from '@/helpers';
import { selectUser } from '@/redux/auth/selectors';
import { chefSchema } from '@/schemas/chefSchema';
import { AppButton } from '@/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import ChefInfo from './ChefInfo/ChefInfo';

const CreateChefForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: zodResolver(chefSchema),
    defaultValues: {
      avatar: '',
      phoneNumber: '',
      accountStatus: 'pending',
      address: {
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        apartment: null,
      },
      liqpayKey: '',
      certificate: '',
    },
  });
  const user = useSelector(selectUser);
  const userId = user.id;
  const [chef, setChef] = useState();
  useEffect(() => {
    const fetchData = async () => {
      if (user.roles.find((role) => role.name === 'chef')) {
        const chefId = user.roles.find((role) => role.name === 'chef').id;
        try {
          const chefData = await getChefById(chefId);
          reset({
            userId: userId,
            avatar: chefData.avatar,
            phoneNumber: addSpacesToPhoneNumber(chefData.phoneNumber),
            address: chefData.address,
            certificate: chefData.certificate,
            accountStatus: chefData.accountStatus,
            liqpayKey: chefData.liqpayKey,
          });
          setChef(chefData);
        } catch (error) {
          console.error('Error fetching chef data:', error);
        }
      }
    };

    fetchData();
  }, [reset, user.roles, userId]);

  const formSubmitHandler = async (data) => {
    try {
      const result = {
        userId: userId,
        avatar: data.avatar,
        phoneNumber: removeSpacesFromPhoneNumber(data.phoneNumber),
        address: data.address,
        certificate: data.certificate,
        accountStatus: data.accountStatus,
        liqpayKey: data.liqpayKey,
      };
      if (user.roles.find((role) => role.name === 'chef')) {
        await updateChef(
          result,
          user.roles.find((role) => role.name === 'chef').id
        );
      } else {
        await createChef(result);
      }
      window.location.href = route.CHEF_ACCOUNT;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <ChefInfo
        control={control}
        errors={errors}
        avatar={chef?.avatar}
        certificate={chef?.certificate}
      />
      <AppButton
        label="Submit"
        type="submit"
        sx={{ width: '400px', margin: '10px auto 50px auto', display: 'block' }}
      />
    </form>
  );
};

export default CreateChefForm;
