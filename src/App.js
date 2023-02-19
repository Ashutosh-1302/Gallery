import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CollageGallery from './components/CollageGallery'
import CarouselGallery from './components/CarouselGallery';
import ScrollingGallery from './components/ScrollingGallery'
// import GalleryPage from './components/GalleryPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Landing'>
      <LandingPage />
      </div>
      <div className='Collage'>
      <CollageGallery />
      </div>
     {/* <br />
     <br />
     <br />
     <br />
     <br /> */}
     
      <div className='Carousel'>
      <CarouselGallery />
      </div>
      {/* <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br /> */}
      <div>
      <ScrollingGallery /></div>
    </div>
  );
}

export default App;
