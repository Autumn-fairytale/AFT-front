import { css } from '@emotion/css';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

const DishCart = ({ dishInfo }) => {
  return (
    <div
      className={css`
        width: 376px;
        height: 485px;
        border-radius: 20px;
        background: #ffffff;
        box-shadow: 13px 13px 30px 0px #00000026;
      `}
    >
      <img
        src={dishInfo.image}
        alt={dishInfo.dishname}
        className={css`
          width: 376px;
          border-radius: 20px;
        `}
      />
      <span
        className={css`
          display: flex;
          justify-content: space-between;
          margin: 0 33px;
        `}
      >
        <h2
          className={css`
            font-family: Montserrat;
            font-size: 28px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: left;
            color: #333333;
          `}
        >
          {dishInfo.dishname}
        </h2>
        <h2>{dishInfo.price}$</h2>
      </span>
    </div>
  );
};

export default DishCart;
