import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselGallery.css";

const images = [
  {
    id: 1,
    src: "https://source.unsplash.com/random/900x600/?indianmonuments",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://source.unsplash.com/random/900x600/?indianfestival",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://source.unsplash.com/random/900x600/?kashi",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://source.unsplash.com/random/900x600/?bihar",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "https://source.unsplash.com/random/900x600/?rajput",
    alt: "Image 5",
  },
];

const CarouselGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "15%",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-gallery-container">
      <h1 className="gallery-title">carousel gallery</h1>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselGallery;
