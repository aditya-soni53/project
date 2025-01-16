import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import './hero.css'

const Hero = () => {
  return (
    <section>
      <div className="hero-section text-white py-5 px-4">
        <div className="wrapper">
          <div className="row justify-content-md-between">
            {/* Left Column */}
            <div className="col-md-6 mb-5 mb-md-0">
              {/* Tech Startup Tag */}
              <div className="mb-4">
                <span className="tech-tag px-3 py-1">Tech Startup</span>
              </div>
              <h1 className="display-4 fw-bold mb-4">
                Pioneering The Next Generation Of Technology.
              </h1>
            </div>
            <div className="col-md-5 mb-5 mb-md-0">
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
        <div className="hero-image d-flex justify-content-center align-items-center">
          <a href="#" className='text-decoration-none play-btn'>
            Play
          </a>
        </div>
        <div className="">
          <h2 className="text-center text-heaing">Trusted by 100,000+ teams globally at innovative companies</h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
