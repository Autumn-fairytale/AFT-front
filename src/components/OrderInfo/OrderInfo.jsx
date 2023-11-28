import { Avatar, Box, Divider, Link, Typography } from '@mui/material';

import { route } from '@/constants';
import { convertToMoney } from '@/helpers';
import { AppButton } from '@/shared';
import CartItem from '../CartItem';
import {
  OrderInfoChefStyled,
  OrderInfoSectionStyled,
} from './OrderInfo.styled';

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
  {
    dish: {
      id: '655f6f7f9da6654a23460baf',
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

const OrderInfo = (/*{ isSubmitting }*/) => {
  return (
    <OrderInfoSectionStyled>
      <Typography component="h2" variant="h4" sx={{ marginBottom: '20px' }}>
        Order information
      </Typography>

      <OrderInfoChefStyled>
        <Avatar />
        <Link href={`${route.CHEFS}/id`}>Chef Info</Link>
      </OrderInfoChefStyled>

      <Box component="ul">
        {items.map((item, index, arr) => (
          <li key={item.dish.id}>
            <CartItem item={item} />
            {index < arr.length - 1 && <Divider />}
          </li>
        ))}
      </Box>

      {/* <Divider sx={{ marginTop: '20px' }} /> */}
      <Box
        sx={{
          marginTop: '20px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Typography
          component="p"
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Subtotal: <span>{convertToMoney(11.99 * 2)}</span>
        </Typography>
        <Typography
          component="p"
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Site commission (15%): <span>{convertToMoney(11.99 * 0.15)}</span>
        </Typography>
        <Typography
          component="p"
          variant="body2"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Delivery service: <span>{convertToMoney(50)}</span>
        </Typography>
        <Divider />
        <Typography
          sx={{
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Order total: <span>{convertToMoney(75.78)}</span>
        </Typography>
      </Box>

      {/* {!isSubmitting && ( */}
      <AppButton
        type="submit"
        label="Place order"
        sx={{ width: '100%', marginTop: '20px' }}
      />
      {/* )} */}
    </OrderInfoSectionStyled>
  );
};

export default OrderInfo;
