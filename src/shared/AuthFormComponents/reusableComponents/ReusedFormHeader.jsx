import PropTypes from 'prop-types';

import { SubtitleStyled, TitleStyled } from '../styles';

export const ReusedFormHeader = ({ title, subtitle, theme, className }) => {
  return (
    <>
      <TitleStyled variant="h4" className={className}>
        {title}
      </TitleStyled>
      <SubtitleStyled theme={theme} variant="subtitle1" className={className}>
        {subtitle}
      </SubtitleStyled>
    </>
  );
};

ReusedFormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.object,
  className: PropTypes.string,
};
