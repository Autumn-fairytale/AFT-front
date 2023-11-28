import { Avatar, Box, Link, Typography } from '@mui/material';

import { route } from '@/constants';
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
];

const OrderInfo = () => {
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
        {items.map((item) => (
          <li key={item.dish}>
            <CartItem item={item} />
          </li>
        ))}
      </Box>

      <AppButton
        type="submit"
        label="Place order"
        sx={{ width: '100%', marginTop: '20px' }}
      />
    </OrderInfoSectionStyled>
  );
};

export default OrderInfo;
