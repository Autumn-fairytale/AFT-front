import { Typography } from '@mui/material';

import imageError from '@/assets/images/error.svg';
import imageNoData from '@/assets/images/no-data.svg';
import imagePayment from '@/assets/images/payment-preparing.svg';
import { PageMessagePropTypes } from './PageMessage.props';
import { PageMessageStyled } from './PageMessage.styled';

const images = {
  error: imageError,
  'no-data': imageNoData,
  payment: imagePayment,
};

const PageMessage = ({ image, message, variant, ...props }) => {
  return (
    <PageMessageStyled {...props}>
      <img src={image ? image : images[variant]} width={400} height={400} />
      <Typography>{message}</Typography>
    </PageMessageStyled>
  );
};

PageMessage.propTypes = PageMessagePropTypes;
PageMessage.defaultProps = {
  variant: 'error',
  message: 'Oops! Something went wrong.',
};

export default PageMessage;
