import { Typography } from '@mui/material';

import image from '@/assets/images/error.svg';
import { FetchErrorPropTypes } from './FetchError.props';
import { FetchErrorStyled } from './FetchError.styled';

const FetchError = ({ message }) => {
  return (
    <FetchErrorStyled>
      <img src={image} width={400} height={400} />
      <Typography>{message}</Typography>
    </FetchErrorStyled>
  );
};

FetchError.propTypes = FetchErrorPropTypes;
FetchError.defaultProps = {
  message: 'Oops! Error.',
};

export default FetchError;
