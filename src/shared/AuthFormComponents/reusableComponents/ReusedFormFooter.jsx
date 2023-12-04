import PropTypes from 'prop-types';

import { RedirectLinkStyled, UnderButtonTextStyled } from '../styles';

export const ReusedFormFooter = ({
  className,
  helperText,
  route,
  redirectButtonText,
}) => (
  <div className={className}>
    <UnderButtonTextStyled variant="subtitle1" component="span">
      {helperText}
    </UnderButtonTextStyled>
    <RedirectLinkStyled href={route} underline="hover">
      {redirectButtonText}
    </RedirectLinkStyled>
  </div>
);

ReusedFormFooter.propTypes = {
  className: PropTypes.string,
  helperText: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  redirectButtonText: PropTypes.string.isRequired,
};
