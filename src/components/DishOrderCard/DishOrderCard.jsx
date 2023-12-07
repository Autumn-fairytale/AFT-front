import { useEffect, useRef, useState } from 'react';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import PropTypes from 'prop-types';

import mockImg from '@/assets/images/kotleta.png';
import { useFetchDish } from '@/hooks/useFetchDish';
import { DishOrderCardButtonsGroup } from './DishOrderCardButtonsGroup';
import { DishOrderCardChefLink } from './DishOrderCardChefLink';
import { DishOrderCardDescription } from './DishOrderCardDescription';
import { DishOrderCardIngredients } from './DishOrderCardIngredients';
import { DishOrderCardRating } from './DishOrderCardRating';
import { DishOrderCardSpiceLevel } from './DishOrderCardSpiceLevel';
import { DishOrderCardTabs } from './DishOrderCardTabs';
import { DishOrderCardVeganBadge } from './DishOrderCardVeganBadge';

export const DishOrderCard = ({ dishId = '6564a4646cac257b0edf57bb' }) => {
  const { data: dish = {}, isLoading } = useFetchDish(dishId);

  const cardRef = useRef();
  const isVegan = dish?.isVegan;
  // const isVegan = true;
  const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setOverlayPosition({ top: rect.top, left: rect.left });
    }
  }, []);

  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [tabValue, setTabValue] = useState(0);
  const [mediaScale, setMediaScale] = useState(1);

  const handleScroll = () => {
    if (cardRef.current) {
      const scale = Math.max(0.5, 1 - cardRef.current.scrollTop / 200);
      setMediaScale(scale);
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (card) {
        card.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

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
    <Card
      ref={cardRef}
      raised
      sx={{
        maxWidth: 400,
        height: 685,
        maxHeight: '85vh',
        overflow: 'scroll',
        position: 'relative',
        overflowX: 'hidden',

        '&::-webkit-scrollbar': {
          width: '4px',
          backgroundColor: 'primary.light',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'primary.main',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: 'primary.main primary.light',
      }}
    >
      {isLoading && <LinearProgress />}

      <Box
        sx={{
          position: 'fixed',
          top: `${overlayPosition.top}px`,
          left: `${overlayPosition.left}px`,
          width: '396px',
          height: '130px',
          backgroundColor: 'white',
          overflow: 'hidden',
          zIndex: 500,
        }}
      />

      <CardMedia
        component="img"
        image={mockImg}
        alt={dish.name}
        sx={{
          position: 'sticky',
          overflow: 'hidden',
          top: 0,
          maxHeight: '100%',
          transform: `scale(${mediaScale})`,
          transition: 'transform 0.3s ease-in-out',
          transformOrigin: 'top',
          zIndex: 600,
        }}
      />

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
            gap={1}
          >
            <DishOrderCardRating />
            {isVegan && <DishOrderCardVeganBadge />}
          </Stack>
        </Box>

        <DishOrderCardChefLink />
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

  // console.log(dish);
};

DishOrderCard.propTypes = { dishId: PropTypes.string };
