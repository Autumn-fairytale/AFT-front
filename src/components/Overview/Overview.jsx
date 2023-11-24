import { Typography } from '@mui/material';

import { route } from '@/constants';
import { CarouselChefs } from '../CarouselChefs/CarouselChefs';
import { CarouselDishes } from '../CarouselDishes/CarouselDishes';
import { OverviewPropTypes } from './Overview.props';
import {
  OverviewContainerStyled,
  OverviewHeaderWrapper,
  OverviewSeeAllLinkStyled,
} from './Overview.styled';

const Overview = ({ title, type, data }) => {
  return (
    <section>
      <OverviewContainerStyled>
        <OverviewHeaderWrapper>
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
          <OverviewSeeAllLinkStyled
            href={type === 'dish' ? route.DISHES : route.CHEFS}
            variant="subtitle1"
            underline="always"
          >
            See all
          </OverviewSeeAllLinkStyled>
        </OverviewHeaderWrapper>
        {type === 'dish' ? (
          <CarouselDishes data={data} />
        ) : (
          <CarouselChefs data={data} />
        )}
      </OverviewContainerStyled>
    </section>
  );
};

Overview.propTypes = OverviewPropTypes;

export default Overview;
