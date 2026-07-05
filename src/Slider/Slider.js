import React, { useState } from 'react';
import './Slider.css';
import slide1 from '../assets/slide1.jpg.jfif';
import slide2 from '../assets/slide2.jpg.jfif';
import slide3 from '../assets/slide3.jpg.jfif';

const images = [
  slide1,
  slide2,
  slide3,
];


const Slider = () => {


  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage(
      currentImage === images.length - 1
        ? 0
        : currentImage + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage(
      currentImage === 0
        ? images.length - 1
        : currentImage - 1
    );
  };

  return (
    <div className="Slider">
      <button onClick={prevSlide}>
        قبلی
      </button>

      <img
        src={images[currentImage]}
        alt="slider"
      />

      <button onClick={nextSlide}>
        بعدی
      </button>
    </div>
  );
};

export default Slider;
