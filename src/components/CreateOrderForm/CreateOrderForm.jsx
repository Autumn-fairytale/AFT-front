import { useState } from 'react';
import { useForm } from 'react-hook-form';

// import { createOrder } from '@/api/createOrder';
import DeliveryInfo from '../DeliveryInfo';
import OrderInfo from '../OrderInfo';
import PaymentButton from '../PaymentButton';
import { CreateOrderFormStyled } from './CreateOrderForm.styled';

const CreateOrderForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      phoneNumber: '+380666663322',
      userName: 'Andrii Zaimak',
      address: {
        country: 'Ukraine',
        city: 'Kyiv',
        street: 'Street 52, 32',
      },
      additionalInfo: '',
    },
  });

  // const [deliveryInfo, setDeliveryInfo] = useState({
  //   phone: '+380666663322',
  //   name: 'Andrii Zaimak',
  //   email: 'dev.andrii.zaimak@gmail.com',
  //   address: {
  //     country: 'Ukraine',
  //     city: 'Kyiv',
  //     street: 'Street 25, 54',
  //   },
  // });
  // const orderItems = [
  //   {
  //     dish: '65572415cf191a7f14e8e423',
  //     count: 1,
  //     name: 'Test dish',
  //   },
  // ];

  const [payment, setPayment] = useState(null);

  const formSubmitHandler = async (data) => {
    console.log('Form data', data, setPayment(null));

    // const result = await createOrder({
    //   address: deliveryInfo.address,
    //   items: orderItems,
    // });

    // setPayment(result.data.payment);

    // console.log(result.data);
  };
  return (
    <>
      <CreateOrderFormStyled onSubmit={handleSubmit(formSubmitHandler)}>
        <DeliveryInfo control={control} />
        <OrderInfo />
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
