import { removeSpacesFromPhoneNumber } from '@/helpers';

export const phoneRegExp = /^(\+38\(0[0-9]{2}\) [0-9]{3} [0-9]{2} [0-9]{2})?$/;
export const defaultPhoneNumberMask = '+38(0xx) xxx xx xx';

export const convertPhoneNumber = (phoneNumber) => {
  const isValid = phoneRegExp.test(phoneNumber);
  return isValid ? removeSpacesFromPhoneNumber(phoneNumber) : '';
};
