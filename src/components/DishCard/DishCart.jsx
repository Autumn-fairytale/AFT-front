import { useState } from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

import PropTypes from 'prop-types';

import AppButton from '@/shared/Buttons/AppButton';
import { css } from '@emotion/css';
import { theme } from '../../theme/theme';

const DishCart = ({ dishInfo }) => {
  const [favorite, setFavorite] = useState(false);
  function handleClick() {
    //Required function
  }
  return (
    <div
      className={css`
        position: relative;
        width: 376px;
        height: 585px;
        border-radius: 20px;
        background: #ffffff;
        box-shadow: 13px 13px 30px 0px #00000026;
      `}
    >
      <div
        className={css`
          position: relative;
        `}
      >
        <img
          src={dishInfo.image}
          alt={dishInfo.dishname}
          className={css`
            display: block;
            width: 376px;
            height: 380px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 0;
            right: 0;
            background: white;
            border-radius: 20px;
          `}
        >
          <IconButton onClick={() => setFavorite(!favorite)}>
            <FavoriteBorderIcon color={favorite ? 'primary' : ''} />
          </IconButton>
        </div>
      </div>

      <span
        className={css`
          display: flex;
          justify-content: space-between;
          margin-top: -10px;
        `}
      >
        <h2
          className={css`
            font-size: 24px;
            font-weight: 900;
            letter-spacing: -1px;
            color: ${theme.palette.text.primary};
            margin-left: 20px;
          `}
        >
          {dishInfo.dishname}
        </h2>
        <h2
          className={css`
            font-size: 24px;
            font-weight: 900;
            letter-spacing: 0em;
            color: ${theme.palette.primary.main};
            margin-right: 30px;
          `}
        >
          {dishInfo.price}$
        </h2>
      </span>
      <p
        className={css`
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          text-align: justify;
          margin: -10px 30px 0 20px;
        `}
      >
        {dishInfo.description.slice(0, 90) + '...'}
      </p>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          margin: 10px 30px 0 20px;
        `}
      >
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
      </div>
    </div>
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
