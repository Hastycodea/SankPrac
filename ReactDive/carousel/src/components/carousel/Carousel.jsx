import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
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
        },
      },
    ],
  };
  return (
    <div>
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        <div>
          <h3>Slider 1</h3>
        </div>
        <div>
          <h3>Slider 2</h3>
        </div>
        <div>
          <h3>Slider 3</h3>
        </div>
        <div>
          <h3>Slider 4</h3>
        </div>
        <div>
          <h3>Slider 5</h3>
        </div>
        <div>
          <h3>Slider 6</h3>
        </div>
        <div>
          <h3>Slider 7</h3>
        </div>
        <div>
          <h3>Slider 8</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
