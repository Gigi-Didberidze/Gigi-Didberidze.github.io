import React from 'react';
import Slider from 'react-slick';
import { FaDesktop, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Services.css';

const Services = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="services-container">
      <h2 className='txt_one'>Expert Services to Meet Your Needs</h2>
      <h2 className='txt_two'>Discover my diverse range of creative services and take your personal projects to the next level</h2>
      <div className="services-slider">
        <Slider {...settings}>
          <div className="service">
            <FaDesktop className="service-icon" />
            <h3>Full Stack Development</h3>
            <p>Custom desktop application development using the latest technologies.</p>
          </div>
          <div className="service">
            <FaMobileAlt className="service-icon" />
            <h3>Mobile App Development</h3>
            <p>Custom desktop application development using the latest technologies.</p>
          </div>
          <div className="service">
            <FaDatabase className="service-icon" />
            <h3>Machine Learning Engineering</h3>
            <p>Custom desktop application development using the latest technologies.</p>
          </div>
          <div className="service">
            <FaDatabase className="service-icon" />
            <h3>Automation Engineering</h3>
            <p>Custom desktop application development using the latest technologies.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Services;
