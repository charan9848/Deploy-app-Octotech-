import React from 'react';
import { useState } from 'react';
import './CustomSlider.css'; // Assuming you will create a CSS file for styling

const CustomSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='custom-slider'>
            <button className='prev' onClick={prevSlide}>❮</button>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} className='slider-image' />
            <button className='next' onClick={nextSlide}>❯</button>
        </div>
    );
};

export default CustomSlider;
