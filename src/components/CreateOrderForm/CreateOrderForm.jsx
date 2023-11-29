import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createOrder } from '@/api/createOrder';
import { addSpacesToPhoneNumber } from '@/helpers';
import { createOrderSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import PaymentButton from '../PaymentButton';
import { CreateOrderFormStyled } from './CreateOrderForm.styled';
import DeliveryInfo from './DeliveryInfo';
import OrderInfo from './OrderInfo';

const CreateOrderForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      phoneNumber: addSpacesToPhoneNumber('+38(066)3334433'),
      userName: 'Andrii Zaimak',
      email: 'dev.andrii.zaimak@gmail.com',
      address: {
        country: 'Ukraine',
        city: 'Kyiv',
        street: 'Street',
        houseNumber: '12',
        apartment: '1',
      },
      additionalInfo: '',
    },
    resolver: zodResolver(createOrderSchema),
  });

  if (Object.keys(errors).length) console.log('errors: ', errors);

  const orderItems = [
    {
      dish: '65572415cf191a7f14e8e423',
      count: 1,
      name: 'Test dish',
    },
  ];

  const [payment, setPayment] = useState(null);

  const formSubmitHandler = async (data) => {
    console.log('Form data', data, setPayment(null));

    try {
      const result = await createOrder({
        // phoneNumber: removeSpacesFromPhoneNumber(data.phoneNumber),
        // userName: data.userName,
        // email: data.email,
        // additionalInfo: data.additionalInfo,
        address: data.address,
        items: orderItems,
      });

      setPayment(result.data.payment);

      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <CreateOrderFormStyled onSubmit={handleSubmit(formSubmitHandler)}>
        <DeliveryInfo control={control} errors={errors} />
        <OrderInfo isSubmitting={isSubmitting} />
      </CreateOrderFormStyled>
      {payment && (
        <PaymentButton
          data={payment.data}
          signature={payment.signature}
          isAutoSubmit={true}
        />
      )}
    </>
  );
};

export default CreateOrderForm;
