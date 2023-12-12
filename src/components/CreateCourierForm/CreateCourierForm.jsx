import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createCourier } from '@/api/courier/createCourier';
import { getCourierById } from '@/api/courier/getCourierById';
import { updateCourier } from '@/api/courier/updateCourier';
import { route } from '@/constants';
import { addSpacesToPhoneNumber, removeSpacesFromPhoneNumber } from '@/helpers';
import { selectUser } from '@/redux/auth/selectors';
import { courierSchema } from '@/schemas/courierSchema';
import { AppButton } from '@/shared';
import { zodResolver } from '@hookform/resolvers/zod';
import CourierInfo from './CourierInfo/CourierInfo';

const CreateCourierForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(courierSchema),
    defaultValues: {
      avatar: '',
      phoneNumber: '',
      isAvailable: 'non-active',
      vehicleType: 'none',
      address: {
        country: '',
        city: '',
        street: '',
        houseNumber: '',
        apartment: '',
      },
      liqpayKey: '',
    },
  });
  const user = useSelector(selectUser);
  const userId = user.id;
  const [courier, setCourier] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      if (user.roles.find((role) => role.name === 'courier')) {
        const courierId = user.roles.find((role) => role.name === 'courier').id;
        try {
          const courierData = await getCourierById({ courierId });
          reset({
            userId: userId,
            avatar: courierData.avatar,
            phoneNumber: addSpacesToPhoneNumber(courierData.phoneNumber),
            address: courierData.address,
            certificate: courierData.certificate,
            isAvailable: courierData.isAvailable,
            vehicleType: courierData.vehicleType,
            liqpayKey: courierData.liqpayKey,
          });
          setCourier(courierData);
        } catch (error) {
          console.error('Error fetching courier data:', error);
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
        isAvailable: data.isAvailable,
        vehicleType: data.vehicleType,
        liqpayKey: data.liqpayKey,
      };
      if (user.roles.find((role) => role.name === 'courier')) {
        await updateCourier(
          result,
          user.roles.find((role) => role.name === 'courier').id
        );
      } else {
        await createCourier(result);
      }
      navigate(route.COURIER_ACCOUNT);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <CourierInfo
        control={control}
        errors={errors}
        avatar={courier?.avatar}
        setValue={setValue}
      />
      <AppButton
        label="Submit"
        type="submit"
        sx={{ width: '620px', margin: '20px auto 50px auto', display: 'block' }}
      />
    </form>
  );
};

export default CreateCourierForm;
