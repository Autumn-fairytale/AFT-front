import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createOrder } from '@/api/createOrder';
import { route } from '@/constants';
import { addSpacesToPhoneNumber, removeSpacesFromPhoneNumber } from '@/helpers';
import { useDeleteAllCartItems } from '@/hooks';
import { selectUser } from '@/redux/auth/selectors';
import { createOrderSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateOrderFormPropTypes } from './CreateOrderForm.props';
import { CreateOrderFormStyled } from './CreateOrderForm.styled';
import DeliveryInfo from './DeliveryInfo';
import OrderInfo from './OrderInfo';

const CreateOrderForm = ({ data: cart }) => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const { mutate: deleteAllCartItems } = useDeleteAllCartItems();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      phoneNumber: user?.phoneNumber
        ? addSpacesToPhoneNumber('+38(066)3334433')
        : '',
      userName: user ? `${user?.firstName} ${user.lastName}` : '',
      email: user ? user.email : '',
      address: {
        country: user?.address ? user.address.country : '',
        city: user?.address ? user.address.city : '',
        street: user?.address ? user.address.street : '',
        houseNumber: user?.address ? user.address.houseNumber : '',
        apartment: user?.address?.apartment ? user.address.apartment : '',
      },
      additionalInfo: '',
    },
    resolver: zodResolver(createOrderSchema),
  });

  if (Object.keys(errors).length) console.log('errors: ', errors);

  const formSubmitHandler = async (data) => {
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

      await deleteAllCartItems();
      navigate(`${route.ORDERS_PAYMENT}/${result.data.order.id}`);
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
    </>
  );
};

CreateOrderForm.propTypes = CreateOrderFormPropTypes;

export default CreateOrderForm;
