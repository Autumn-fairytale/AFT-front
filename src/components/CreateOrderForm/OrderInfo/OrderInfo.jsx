import { useMemo } from 'react';

import { Typography } from '@mui/material';

import CartInfo from '@/components/CartInfo';
import config from '@/config';
import { AppButton } from '@/shared';
import { OrderInfoSectionStyled } from './OrderInfo.styled';
import OrderSummary from './OrderSummary';

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
      image:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg',
      description: 'A tasty kotleta with fresh  ingredients.',
      price: 11000.99,
      isVegan: false,
      cuisine: 'Ukrainian',
      category: 'Main',
      isAvailable: true,
      spiceLevel: 1,
    },
    count: 4,
  },
];

const data = {
  chef: {
    id: '23nj23jnNJ34JK2',
    avatar: 'image.jpg',
    name: 'Andrii Zaimak',
  },
  items,
};

const OrderInfo = (/*{ isSubmitting }*/) => {
  const summary = useMemo(() => {
    const subtotal = items.reduce(
      (acc, item) => acc + item.dish.price * item.count,
      0
    );
    const tax = subtotal * (config.taxPercent / 100);
    const delivery = 50;
    return {
      subtotal,
      tax,
      delivery,
      total: subtotal + tax + delivery,
    };
  }, []);

  return (
    <OrderInfoSectionStyled>
      <Typography component="h2" variant="h4" sx={{ marginBottom: '20px' }}>
        Order information
      </Typography>

      {items.length === 0 ? (
        <Typography>Choose any dishes</Typography>
      ) : (
        <>
          <CartInfo data={data} />

          <OrderSummary
            summary={summary}
            sx={{
              marginTop: '20px',
            }}
          />
          {/* {!isSubmitting && ( */}
          <AppButton
            type="submit"
            label="Place order"
            sx={{ width: '100%', marginTop: '20px' }}
          />
          {/* )} */}
        </>
      )}
    </OrderInfoSectionStyled>
  );
};

export default OrderInfo;
