import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createOrder } from '@/api/createOrder';
import { addSpacesToPhoneNumber, removeSpacesFromPhoneNumber } from '@/helpers';
import { createOrderSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import PaymentButton from '../PaymentButton';
import { CreateOrderFormPropTypes } from './CreateOrderForm.props';
import { CreateOrderFormStyled } from './CreateOrderForm.styled';
import DeliveryInfo from './DeliveryInfo';
import OrderInfo from './OrderInfo';

const CreateOrderForm = ({ data: cart }) => {
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

  const [orderId, setOrderId] = useState(null);

  const formSubmitHandler = async (data) => {
    console.log();
    try {
      const result = await createOrder({
        phoneNumber: removeSpacesFromPhoneNumber(data.phoneNumber),
        name: data.userName,
        email: data.email,
        additionalInfo: data.additionalInfo.length || null,
        address: data.address,
        items: cart.items.map((item) => ({
          count: item.count,
          dishId: item.dish.id,
        })),
      });

      setOrderId(result.data.order.id);

      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <CreateOrderFormStyled onSubmit={handleSubmit(formSubmitHandler)}>
        <DeliveryInfo control={control} errors={errors} />
        <OrderInfo data={cart} isSubmitting={isSubmitting} />
      </CreateOrderFormStyled>
      {orderId && <PaymentButton orderId={orderId} isAutoSubmit={true} />}
    </>
  );
};

CreateOrderForm.propTypes = CreateOrderFormPropTypes;

export default CreateOrderForm;
