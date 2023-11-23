import Slider from 'react-slick';

import PropTypes from 'prop-types';

import { AppCarouselWrapper } from './AppCarousel.styled';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './AppCarouselStyles.css';

export const AppCarousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 10000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <AppCarouselWrapper>
      <Slider {...settings}>{children}</Slider>
    </AppCarouselWrapper>
  );
};

AppCarousel.propTypes = {
  children: PropTypes.node.isRequired,
};
