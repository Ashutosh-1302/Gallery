import React from 'react';
import './styles.css';

function LandingPageCover() {
  return (
    <div className="landing-page-cover">
      <img src="https://source.unsplash.com/random/1920x720/?dark-wallpaper" alt="Landing Page Cover" />
      <div className="text-container">
        <h1>Land on colourfull planet</h1>
        <p>Explore the world of cool effects in ReactJS</p>
        {/* <button>scroll</button> */}
      </div>
      <center><button className='land'>scroll down</button></center>
    </div>
  );
}

export default LandingPageCover;
