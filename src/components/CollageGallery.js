import React from 'react';
import './CollageGallery.css';

const CollageGallery = ({ images }) => {
  return (
    <div className="decorative-collage-gallery">
      <h1 className="gallery-title">Collage gallery</h1>
      <div className="collage-container">
        <div className="big-image" style={{ backgroundImage: `url("https://source.unsplash.com/random/?nature")` }}>
          <div className="overlay">
            <div className="text">View Larger</div>
          </div>
        </div>
        <div className="small-images">
          <div className="small-image" style={{ backgroundImage: `url("https://source.unsplash.com/random/?winter")` }}>
            <div className="overlay">
              <div className="text">View Larger</div>
            </div>
          </div>
          <div className="small-image" style={{ backgroundImage: `url("https://source.unsplash.com/random/?summer")` }}>
            <div className="overlay">
              <div className="text">View Larger</div>
            </div>
          </div>
          <div className="small-image" style={{ backgroundImage: `url("https://source.unsplash.com/random/?spring")` }}>
            <div className="overlay">
              <div className="text">View Larger</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageGallery;
