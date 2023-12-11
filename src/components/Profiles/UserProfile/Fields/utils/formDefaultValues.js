import { addSpacesToPhoneNumber } from '@/helpers';
import { defaultPhoneNumberMask } from './patterns';

export const getUserDefaultValues = (user) => {
  return {
    avatar: user?.avatar ? user.avatar : '',

    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    email: user ? user.email : '',
    phoneNumber: user?.phoneNumber
      ? addSpacesToPhoneNumber(user?.phoneNumber)
      : defaultPhoneNumberMask,

    currentPassword: '',
    newPassword: '',

    address: {
      country: user?.address ? user.address.country : '',
      city: user?.address ? user.address.city : '',
      street: user?.address ? user.address.street : '',
      houseNumber: user?.address ? user.address.houseNumber : '',
      apartment: user?.address?.apartment ? user.address.apartment : '',
    },
  };
};
