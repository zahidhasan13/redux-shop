import React from 'react';
import slider1 from '../../images/slider1.jpg'
import './Slider.css'


const Slider = () => {
  return (
    <div className='slider'>
      <div className="container">
        <div className="slider_img">
        <img src={slider1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slider;