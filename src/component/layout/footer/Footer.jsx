import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import logo from '../../../assets/logo/tech-startup-n1ew.svg'
import img1 from '../../../assets/footer-slider/Card1.webp'
import img2 from '../../../assets/footer-slider/Card2.webp'
import img3 from '../../../assets/footer-slider/Card3.webp'
import img4 from '../../../assets/footer-slider/Card4.webp'
import img5 from '../../../assets/footer-slider/Card5.webp'
import img6 from '../../../assets/footer-slider/Card6.webp'
import img7 from '../../../assets/footer-slider/Card7.webp'

const Footer = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
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
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // For mobile
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
    <footer className="footer-section">
      <div className="px-4">
        <div className="footer-content wrapper">
          <div className="row py-3">
            <div className="col-12 col-lg-6 p-2">
              <div className="d-flex flex-column flex-md-row gap-3 py-1 justify-content-start justify-content-md-center justify-content-lg-start">
                <h2 className='quick-links-heading footer-content-title mb-0'>Contact</h2>
                <div className="footer-content-details d-flex gap-3">
                  <div className="phone_details">
                    <span><FontAwesomeIcon icon={faPhone} size="1x" color="green" className="phone-icon" /></span>
                    <span> +91 1234567890</span>
                  </div>
                  <div className="email_details">
                    <span><FontAwesomeIcon icon={faEnvelope} size="1x" className="envelope-icon" /></span>
                    <span> 6Hq7R@example.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 p-2">
              <div className="footer-social_icons">
                <ul className="d-flex gap-2 list-unstyled mb-0 justify-content-start justify-content-md-center justify-content-lg-end">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} size="3x" className="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} size="3x" className="footer-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faYoutube} size="3x" className="footer-icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-nav_links px-4 mt-4">
        <div className="wrapper py-5">
          <div className="d-grid footer-nav_links-grid">
            <div className="company-links p-2">
              <h2 className='quick-links-heading'>Company</h2>
              <div className="company-quick_links mt-3">
                <ul className="list-unstyled mb-0 d-flex flex-column row-gap-2">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Our Program</a></li>
                  <li><a href="#">Work With Us</a></li>
                </ul>
              </div>
            </div>
            <div className="company-links p-2">
              <h2 className='quick-links-heading'>Company</h2>
              <div className="company-quick_links mt-3">
                <ul className="list-unstyled mb-0 d-flex flex-column row-gap-2">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Our Program</a></li>
                  <li><a href="#">Work With Us</a></li>
                </ul>
              </div>
            </div>
            <div className="information-links p-2">
              <h2 className='quick-links-heading'>Information</h2>
              <div className="company-quick_links mt-3">
                <ul className="list-unstyled mb-0 d-flex flex-column row-gap-2">
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Pricing Plan</a>s</li>
                  <li><a href="#">Referral Program</a></li>
                  <li><a href="#">Payment Gateway</a></li>
                </ul>
              </div>
            </div>
            <div className="quick-links p-2">
              <h2 className='quick-links-heading'>Quick Links</h2>
              <div className="company-quick_links mt-3">
                <ul className="list-unstyled mb-0 d-flex flex-column row-gap-2">
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Techonology</a></li>
                  <li><a href="#">Newsroom</a></li>
                  <li><a href="#">Data Centers</a></li>
                </ul>
              </div>
            </div>
            <div className="useful-links p-2">
              <h2 className='quick-links-heading'>Useful Links</h2>
              <div className="company-quick_links mt-3">
                <ul className="list-unstyled mb-0 d-flex flex-column row-gap-2">
                  <li><a href="#">Blog & News</a></li>
                  <li><a href="#">How It Works</a></li>
                  <li><a href="#">Our Features</a></li>
                  <li><a href="#">Compare Other</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4 footer-logo">
        <div className="wrapper py-4">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="d-flex gap-3 flex-wrap align-items-center">
                <div className="footer-logo">
                  <img src={logo} alt="logo" className="header-logo" />
                </div>
                <h2 className='footer-logo-text mb-0'>Innovating tomorrow, today.</h2>
              </div>
            </div>
            <div className="col-md-5" style={{marginTop: "20px"}}>
              <div className="img-slider pt-1">
                <Slider {...settings}>
                  <img src={img1} alt="" className='slider-img' />
                  <img src={img2} alt="" className='slider-img' />
                  <img src={img3} alt="" className='slider-img' />
                  <img src={img4} alt="" className='slider-img' />
                  <img src={img5} alt="" className='slider-img' />
                  <img src={img6} alt="" className='slider-img' />
                  <img src={img7} alt="" className='slider-img' />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright px-4 mt-4">
        <div className="px-4 mt-4 footer-copyright-details">
          <div className="wrapper py-4">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-copyright-text">
                  <h2 className='mb-0 text-center text-md-start'>Copyright © 2023. All rights reserved By <span className='footer-copyright-name'>Keystone Themes</span></h2>
                </div>
              </div>
              <div className="col-md-6 mt-3 mt-md-0 ">
                <ul className='d-flex flex-wrap gap-1 gap-md-3 list-unstyled justify-content-md-end footer-other-links'>
                  <li className='left-border'>
                    <a className='text-decoration-none top-header-links-size' href="#">
                      Legal
                    </a>
                  </li>
                  <li className='left-border'>
                    <a className='text-decoration-none top-header-links-size' href="#">
                      Privacy Policy
                    </a>
                  </li>
                  <li className='left-border'>
                    <a className='text-decoration-none top-header-links-size' href="#">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className='text-decoration-none top-header-links-size' href="#">
                      Refund policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
