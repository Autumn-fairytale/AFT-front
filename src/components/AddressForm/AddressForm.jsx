import DeliveryInfoFormItem from '../CreateOrderForm/DeliveryInfo/DeliveryInfoFormItem';
import { AddressFormPropTypes } from './AddressForm.props';
import { AddressFormStyled } from './AddressForm.styled';
import { defaultAddressFormItems } from './addressItems';

const AddressForm = ({ control, errors, addressFormItems, ...props }) => {
  return (
    <AddressFormStyled {...props}>
      {addressFormItems.map(({ name, title, component, required, sx }) => (
        <DeliveryInfoFormItem
          key={name}
          info={{
            title,
            name: `address.${name}`,
            component,
            required,
            sx,
          }}
          control={control}
          error={errors['address']?.[name]}
        />
      ))}
    </AddressFormStyled>
  );
};

AddressForm.propTypes = AddressFormPropTypes;

AddressForm.defaultProps = {
  addressFormItems: defaultAddressFormItems,
};

export default AddressForm;
