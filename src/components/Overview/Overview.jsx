import { Typography } from '@mui/material';

import { OverviewPropTypes } from './Overview.props';
import {
  OverviewContainerStyled,
  OverviewHeaderWrapper,
  OverviewSeeAllLinkStyled,
} from './Overview.styled';

const Overview = ({ title, component, redirectTo }) => {
  return (
    <section>
      <OverviewContainerStyled>
        <OverviewHeaderWrapper>
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
          <OverviewSeeAllLinkStyled href={redirectTo} variant="subtitle1">
            See all
          </OverviewSeeAllLinkStyled>
        </OverviewHeaderWrapper>
        {component}
      </OverviewContainerStyled>
    </section>
  );
};

Overview.propTypes = OverviewPropTypes;

export default Overview;
