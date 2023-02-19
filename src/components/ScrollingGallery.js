import React, { useState } from 'react';
import './scroll.css';

function ScrollingGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://source.unsplash.com/random/?fruit',
    'https://source.unsplash.com/random/?mango',
    'https://source.unsplash.com/random/?straberry',
    'https://source.unsplash.com/random/?pineapple',
    'https://source.unsplash.com/random/?'
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="staged-scrolling-gallery">
      <h1 className="gallery-title-sc">staged scrolling gallery</h1>
      <div className="images-container">
        
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="arrows-container">
        <button className="prev" onClick={handlePrevClick}>
          - prev
        </button>
        <button className="next" onClick={handleNextClick}>
          next -
        </button>
      </div>
    </div>
  );
}

export default ScrollingGallery;
