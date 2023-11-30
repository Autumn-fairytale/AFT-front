import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { createOrder } from '@/api/createOrder';
import { addSpacesToPhoneNumber, removeSpacesFromPhoneNumber } from '@/helpers';
import { createOrderSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import PaymentButton from '../PaymentButton';
import { CreateOrderFormStyled } from './CreateOrderForm.styled';
import DeliveryInfo from './DeliveryInfo';
import OrderInfo from './OrderInfo';

const items = [
  {
    dish: {
      id: '655f6f7f9da6654a23460bad',
      name: 'Available Kotleta',
      image: 'https://site/url_to_image.jpg',
      description: 'A tasty kotleta with fresh  ingredients.',
      price: 11.99,
      isVegan: false,
      cuisine: 'Ukrainian',
      category: 'Main',
      isAvailable: true,
      spiceLevel: 1,
    },
    count: 2,
  },
];

const data = {
  chef: {
    id: '23nj23jnNJ34JK2',
    avatar: 'image.jpg',
    name: 'Andrii Zaimak',
  },
  items,
};

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
        items: items.map((item) => ({
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
        <OrderInfo data={data} isSubmitting={isSubmitting} />
      </CreateOrderFormStyled>
      {orderId && <PaymentButton orderId={orderId} isAutoSubmit={true} />}
    </>
  );
};

export default CreateOrderForm;
