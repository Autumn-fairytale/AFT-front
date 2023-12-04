import { Avatar, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import {
  defaultDishCardPropTypes,
  DishCardPropTypes,
} from './DishCardSceleton.props';
import {
  ButtonsSceletonWrapper,
  CircleWrapper,
  DishCardWrapper,
  RectangularWrapper,
  TitleSceletonWrapper,
} from './DishCardSceleton.styled';

export const DishCardSceleton = ({ isCarousel }) => {
  return (
    <DishCardWrapper isCarousel={isCarousel}>
      <CircleWrapper>
        <Skeleton variant="circular" sx={{ bgcolor: '#e2e2e2' }}>
          <Avatar />
        </Skeleton>
      </CircleWrapper>
      <RectangularWrapper>
        <TitleSceletonWrapper>
          <Typography variant="h3" width="85%">
            <Skeleton sx={{ bgcolor: '#e2e2e2' }} />
          </Typography>
        </TitleSceletonWrapper>

        <ButtonsSceletonWrapper>
          <Skeleton
            variant="rectangular"
            width="50%"
            height="100%"
            sx={{ bgcolor: '#e2e2e2', borderRadius: '5px' }}
          ></Skeleton>
          <Skeleton
            variant="rectangular"
            width="30%"
            height="100%"
            sx={{ bgcolor: '#e2e2e2', borderRadius: '5px' }}
          ></Skeleton>
        </ButtonsSceletonWrapper>
      </RectangularWrapper>

      <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
    </DishCardWrapper>
  );
};

DishCardSceleton.propTypes = DishCardPropTypes;
DishCardSceleton.defaultProps = defaultDishCardPropTypes;
