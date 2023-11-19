import Slider from 'react-slick';

import DishCard from '@/components/DishCard/DishCard';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

export const AppCarousel = () => {
  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
        <DishCard />
      </Slider>
    </div>
  );
};
