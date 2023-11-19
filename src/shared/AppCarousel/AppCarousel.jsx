import { Component } from 'react';
import Slider from 'react-slick';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class AppCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      autoplaySpeed: 10000,

      autoplay: true,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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
      <div
        style={{
          padding: '50px',
        }}
      >
        <Slider {...settings}>
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Slider>
      </div>
    );
  }
}

export function MediaCard() {
  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
