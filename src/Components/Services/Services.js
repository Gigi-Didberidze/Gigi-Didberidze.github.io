import React from 'react';
import Slider from 'react-slick';
import {FaDesktop, FaChartBar, FaWrench, FaBrain} from 'react-icons/fa'
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
            <FaChartBar className="service-icon" />
            <h3>Data Analysis / Engineering</h3>
            <p>I offer Data Analysis/Engineering services to help individuals and businesses extract insights from their data. Whether you need to clean, transform, analyze, or visualize your data, I can help you make better decisions and gain a competitive edge. </p>
          </div>
          <div className="service">
            <FaWrench className="service-icon" />
            <h3>Automation Engineering</h3>
            <p>I create custom automation solutions to streamline workflows & boost productivity. From repetitive tasks to complex workflows, I leverage my programming & automation expertise to fit your needs.</p>
          </div>
          <div className="service">
            <FaBrain className="service-icon" />
            <h3>NLP and AI<br></br>Solutions</h3>
            <p>My AI/NLP services leverage natural language processing and artificial intelligence tech to extract insights and automate processes for businesses. I build custom chatbots, perform sentiment analysis, extract key info from data and more.</p>
          </div>
          <div className="service">
            <FaDesktop className="service-icon" />
            <h3>Full Stack Development</h3>
            <p>I offer full-stack development services for web and mobile apps. With expertise in front-end and back-end development and latest technologies, I create responsive and scalable end-to-end solutions.</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Services;
