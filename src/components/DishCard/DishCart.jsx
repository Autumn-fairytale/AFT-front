import { useState } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';

import AppButton from '@/shared/Buttons/AppButton';
import {
  ButtonsWrapper,
  DishCardWrapper,
  DishDescription,
  DishImage,
  DishImageWrapper,
  DishName,
  DishPrice,
  FavorireButton,
  MainInfoWrapper,
} from './DishCart.styled';

const DishCart = ({ dishInfo }) => {
  const [favorite, setFavorite] = useState(false);
  function handleClick() {
    //Required function
  }
  return (
    <DishCardWrapper>
      <DishImageWrapper>
        <DishImage
          src={dishInfo.image}
          alt={dishInfo.dishname}
          component="img"
        />
        <FavorireButton>
          <IconButton onClick={() => setFavorite(!favorite)}>
            <FavoriteBorderIcon color={favorite ? 'primary' : ''} />
          </IconButton>
        </FavorireButton>
      </DishImageWrapper>

      <MainInfoWrapper>
        <DishName>{dishInfo.dishname}</DishName>
        <DishPrice>{dishInfo.price}$</DishPrice>
      </MainInfoWrapper>
      <DishDescription>
        {dishInfo.description.slice(0, 90) + '...'}
      </DishDescription>
      <ButtonsWrapper>
        <AppButton
          type="outlined"
          label="Learn More"
          endIcon={<ChevronRightIcon />}
          onClick={handleClick}
        />
        <AppButton
          type="contained"
          label="Add to Cart"
          endIcon={<ShoppingCartIcon />}
          onClick={handleClick}
        />
      </ButtonsWrapper>
    </DishCardWrapper>
  );
};

DishCart.propTypes = {
  dishInfo: PropTypes.shape({
    image: PropTypes.string,
    dishname: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};

export default DishCart;
