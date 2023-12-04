import { Typography } from '@mui/material';

import image from '@/assets/images/no-data.svg';
import { NoDataPropTypes } from './NoData.props';
import { NoDataStyled } from './NoData.styled';

const NoData = ({ message, ...props }) => {
  return (
    <NoDataStyled {...props}>
      <img src={image} width={400} height={400} />
      <Typography>{message}</Typography>
    </NoDataStyled>
  );
};

NoData.propTypes = NoDataPropTypes;
NoData.defaultProps = {
  message: 'No data found',
};

export default NoData;
