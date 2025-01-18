import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './hero.css'
import Slider from "react-slick";
import img1 from '../../assets/brand/new-Gourmet-helpdesklatest.png'
import img2 from '../../assets/brand/new-Harvest-helpdesklatest.png'
import img3 from '../../assets/brand/new-Lunaxy-helpdesklatest.png'
import img4 from '../../assets/brand/new-mrbeat.png'
import img5 from '../../assets/brand/new-Quantum-helpdesklatest.png'
import img6 from '../../assets/brand/new-Runwaaay-helpdesklatest.png'
import img7 from '../../assets/brand/new-Urban-helpdesklatest.png'

const Hero = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true, // Enables center mode
    centerPadding: "10px", // Space on the left and right of each slide
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 320, // For mobile
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px", // Adjust as needed
        },
      },
      {
        breakpoint: 425, // For mobile
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px", // Adjust as needed
        },
      },
    ],
  };

  return (
    <section>
      <div className="hero-section text-white py-5 px-4">
        <div className="wrapper">
          <div className="row justify-content-md-between mb-5">
            {/* Left Column */}
            <div className="col-md-6 mb-5 mb-md-0" data-aos="fade-down" data-aos-duration="1000" >
              {/* Tech Startup Tag */}
              <div className="mb-4">
                <span className="tech-tag px-3 py-1">Tech Startup</span>
              </div>
              <h1 className="display-4 fw-bold mb-4">
                Pioneering The Next Generation Of Technology.
              </h1>
            </div>
            <div className="col-md-5 mb-5 mb-md-0" data-aos="fade-left" data-aos-duration="1000">
              <div className="p-md-5 hero-content">
                <p className="text-light mb-4">
                  Tech Startup focuses on pioneering innovative technological solutions to address modern challenges.
                </p>
                <div className="feature-list mb-4 d-flex gap-3">
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} color="#88E64A" className="custom-check-icon" />
                    <span>Eliminate Repetition</span>
                  </div>
                  <div className="d-flex gap-2 align-items-center mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} color="#88E64A" className="custom-check-icon" />
                    <span>Boost Efficiency</span>
                  </div>
                </div>
                <a href="#" className='free-trial-btn px-4 py-3 text-decoration-none position-relative'>
                  <span className='position-relative z-2'>Start Free Trial</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper position-relative px-3 px-md-0">
        <div className="hero-image d-flex justify-content-center align-items-center" data-aos="fade-up" data-aos-duration="1000">
          <a href="#" className='text-decoration-none play-btn'>
            Play
          </a>
        </div>
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-center text-heaing">Trusted by 100,000+ teams globally at innovative companies</h2>
        </div>
        <div className="brand-logos mx-auto my-4" data-aos="fade-left" data-aos-duration="1000">
          <Slider {...settings}>
            <img src={img1} alt="" className='brand-img' />
            <img src={img2} alt="" className='brand-img' />
            <img src={img3} alt="" className='brand-img' />
            <img src={img4} alt="" className='brand-img' />
            <img src={img5} alt="" className='brand-img' />
            <img src={img6} alt="" className='brand-img' />
            <img src={img7} alt="" className='brand-img' />
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Hero;
