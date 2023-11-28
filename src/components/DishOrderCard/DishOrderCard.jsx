import { useState } from 'react';

// import LeafIcon from '@mui/icons-material/Leaf';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import mockImg from '@/assets/images/kotleta.png';
import { VeganIcon } from '@/assets/images/veganIcon';
import { useFetchDish } from '@/hooks/useFetchDish';
import { AppModal } from '@/shared/AppModal/AppModal';
import { DishOrderCardButtonsGroup } from './DishOrderCardButtonsGroup';
import { DishOrderCardDescription } from './DishOrderCardDescription';
import { DishOrderCardIngredients } from './DishOrderCardIngredients';
import { DishOrderCardRating } from './DishOrderCardRating';
import { DishOrderCardSpiceLevel } from './DishOrderCardSpiceLevel';
import { DishOrderCardTabs } from './DishOrderCardTabs';

export const DishOrderCard = () => {
  const [openModal, setOpenModal] = useState(true);
  //   const mockDishId = '656481b26cac257b0edf573d';
  const longDescrDishId = '6564a4646cac257b0edf57bb';

  const { data: dish = {}, isLoading } = useFetchDish(longDescrDishId);

  // const isVegan = dish?.isVegan;
  const isVegan = true;

  const ProductCard = () => {
    const [expanded, setExpanded] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_event, newValue) => {
      setTabValue(newValue);
    };

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleQuantityChange = (change) => {
      setQuantity(quantity + change);
    };

    const totalWeight = dish.weight * quantity;
    const totalPrice = dish.price * quantity;

    return (
      <Card raised sx={{ maxWidth: 345, maxHeight: '80vh' }}>
        {isLoading && <LinearProgress />}
        <CardMedia component="img" image={mockImg} alt={dish.name} />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: 'bold' }}
            >
              {dish.name}
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              alignSelf="flex-start"
              gap={2}
            >
              <DishOrderCardRating />
              {isVegan && (
                <Stack>
                  <VeganIcon sx={{ fill: 'green', fontSize: '20px' }} />
                  <Typography color="green" fontSize={10}>
                    veg
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Box>

          <Typography
            variant="body2"
            component="span"
            sx={{ textDecoration: 'underline', color: 'primary.main' }}
          >
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
              }}
              sx={{
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              }}
            >
              by Chef Boris J.
            </Link>
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontWeight: 'bold' }}
          >
            {`${dish.cuisine} · ${dish.category}`}
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Box sx={{ width: '100%' }}>
            <DishOrderCardTabs
              handleTabChange={handleTabChange}
              tabValue={tabValue}
            />
            <Box sx={{ height: 130 }}>
              {tabValue === 0 && (
                <DishOrderCardDescription
                  expanded={expanded}
                  description={dish.description}
                  handleExpandClick={handleExpandClick}
                />
              )}
              {tabValue === 1 && <DishOrderCardIngredients />}
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} />
          <Stack direction="row" sx={{ justifyContent: 'space-around' }}>
            <Box>
              <Typography variant="subtitle2" fontWeight={'bold'}>
                Portion size
              </Typography>
              <Typography variant="subtitle1">
                {dish.weight}g - {dish.price}₴
              </Typography>
            </Box>

            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography variant="subtitle2" fontWeight={'bold'}>
                Total
              </Typography>
              <Typography variant="subtitle1">
                {totalWeight}g -{' '}
                <Typography
                  component="span"
                  variant="subtitle1"
                  sx={{ fontWeight: 'bold' }}
                >
                  {totalPrice.toFixed(2)}₴
                </Typography>
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 1 }} />
          <DishOrderCardSpiceLevel spiceLevel={dish?.spiceLevel} />

          <Divider sx={{ my: 1 }} />
          <DishOrderCardButtonsGroup
            quantity={quantity}
            handleQuantityChange={handleQuantityChange}
          />
        </CardContent>
      </Card>
    );
  };

  // console.log(dish);

  return (
    <AppModal open={openModal} onClose={() => setOpenModal(true)}>
      {dish && <ProductCard />}
    </AppModal>
  );
};
