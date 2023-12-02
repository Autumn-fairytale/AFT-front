import { Avatar } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import {
  ChefCardPropTypes,
  defaultChefCardPropTypes,
} from './ChefCardSceleton.props';
import {
  ChefCardWrapper,
  CircleWrapper,
  RectangularWrapper,
} from './ChefCardSceleton.styled';

export const ChefCardSceleton = ({ isCarousel }) => {
  return (
    <ChefCardWrapper isCarousel={isCarousel}>
      <CircleWrapper>
        <Skeleton variant="circular" sx={{ bgcolor: '#ffd28b' }}>
          <Avatar />
        </Skeleton>
      </CircleWrapper>
      <RectangularWrapper>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{ bgcolor: '#ffd28b' }}
        ></Skeleton>
      </RectangularWrapper>

      <Skeleton variant="rectangular" width="100%" height="100%"></Skeleton>
    </ChefCardWrapper>
  );
};

ChefCardSceleton.propTypes = ChefCardPropTypes;
ChefCardSceleton.defaultProps = defaultChefCardPropTypes;
