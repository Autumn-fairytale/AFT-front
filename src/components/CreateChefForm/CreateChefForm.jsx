import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createChef } from '@/api/chef/createChef';
import { getChefById } from '@/api/chef/getChefById';
import { updateChef } from '@/api/chef/updateChef';
import { route } from '@/constants';
import { addSpacesToPhoneNumber, removeSpacesFromPhoneNumber } from '@/helpers';
import { getCurrentUser } from '@/redux/auth/operations';
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
    setValue,
  } = useForm({
    resolver: zodResolver(chefSchema),
    defaultValues: {
      avatar: '',
      phoneNumber: '',
      isAvailable: 'non-active',
      address: {
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        apartment: '',
      },
      liqpayKey: '',
      certificate: '',
    },
  });
  const user = useSelector(selectUser);
  const userId = user.id;
  const [chef, setChef] = useState();
  const navigate = useNavigate();
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
            isAvailable: chefData.isAvailable,
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
  const dispatch = useDispatch();
  const formSubmitHandler = async (data) => {
    try {
      const result = {
        userId: userId,
        avatar: data.avatar,
        phoneNumber: removeSpacesFromPhoneNumber(data.phoneNumber),
        address: data.address,
        certificate: data.certificate,
        isAvailable: data.isAvailable,
        liqpayKey: data.liqpayKey,
      };
      if (user.roles.find((role) => role.name === 'chef')) {
        await updateChef(
          result,
          user.roles.find((role) => role.name === 'chef').id
        );
      } else {
        await createChef(result);
        dispatch(getCurrentUser());
      }
      navigate(route.CHEF_ACCOUNT);
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
        setValue={setValue}
      />
      <AppButton
        label="Submit"
        type="submit"
        sx={{
          width: '620px',
          margin: '10px auto 50px auto',
          display: 'block',
        }}
      />
    </form>
  );
};

export default CreateChefForm;
