import React, { useState } from 'react';
import './header.css'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXTwitter, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from '../../../assets/logo/tech-startup-new.svg'
import hamburger from '../../../assets/hamburger/hamburger-icon.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevOpen) => !prevOpen);
  }
  return (
    <>
      <header className='bg-white'>
        <div className="top-header px-4 bg-zenix_dark h-2">
          <div className="top-header-details wrapper p-2 px-0 text-white h-100">
            <div className="d-flex justify-content-center justify-content-md-between h-100">
              <div className="company-name d-none d-md-block">
                <h2 className='fs-6'>Generation of technology <strong>- Zenix</strong></h2>
              </div>
              <div className="top-header-social_links">
                <ul className='d-flex gap-3 list-unstyled'>
                  <li className='left-border'>
                    <a className='text-decoration-none top-header-links-size' href="#">
                      <FontAwesomeIcon icon={faFacebook} className='me-1' />
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className='left-border'>
                    <a className='text-decoration-none top-header-links-size' href="#">
                      <FontAwesomeIcon icon={faInstagram} className='me-1' />
                      <span>Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a className='text-decoration-none top-header-links-size' href="#">
                      <FontAwesomeIcon icon={faSquareXTwitter} className='me-1' />
                      <span>Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header px-4 py-1">
          <div className="wrapper py-1">
            <div className="row align-items-center">
              <div className="logo-box col-3 col-lg-2 p-0">
                <div className="w-100">
                  <a href="#">
                    <img src={logo} alt="logo" className='header-logo ms-md-2' />
                  </a>
                </div>
              </div>
              <div className="desktop-menu-box d-none d-lg-block col-lg-7 p-0">
                <nav className='desktop-menu'>
                  <ul className='d-flex list-unstyled m-0'>
                    <li className='p-3'>
                      <a href="#" className='text-decoration-none'>Home</a>
                    </li>
                    <li className='p-3'>
                      <a href="#" className='text-decoration-none'>Features</a>
                    </li>
                    <li className='p-3'>
                      <a href="#" className='text-decoration-none'>Pricing</a>
                    </li>
                    <li className='p-3'>
                      <a href="#" className='text-decoration-none'>How it Works</a>
                    </li>
                    <li className='p-3'>
                      <a href="#" className='text-decoration-none'>About</a>
                    </li>
                    <li className='p-3'>
                      <a href="#" className='text-decoration-none'>Contact</a>
                    </li>
                    <li className='p-3'>
                      <a href="#" className='text-decoration-none'>
                        Others
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="button-box col-lg-3 col-7 p-0">
                <div className="d-flex justify-content-end gap-1 gap-md-3">
                  <a className="text-decoration-none position-relative login-btn px-2 py-2 px-md-4 py-md-2" href="#">
                    <span>
                      <FontAwesomeIcon icon={faUser} className="me-1" />
                    </span>
                    Login
                  </a>
                  <a href="#" className="text-decoration-none position-relative get-started-btn px-2 py-2 px-md-4 py-md-2">
                    <span className='position-relative z-2'>Get Started</span>
                  </a>
                </div>
              </div>
              {/* mobile menu icon */}
              <div className="mobile-menu-button d-block d-lg-none col-2 p-0 text-end">
                <img src={hamburger} alt="" onClick={toggleMobileMenu} />
              </div>
            </div>
            {/* mobile menu navList */}
            <div className={`mobile-menu-box d-lg-none ${mobileMenuOpen ? "slide-out" : "slide-in"}`}>
              <div className="mobile-menu-navList ms-auto position-relative p-3">
                <div className="mobile-menu-close position-absolute top-0 end-0 me-3">
                  <span className='' onClick={toggleMobileMenu}>&times;</span>
                </div>
                <div className="mobile-menu-logo text-center py-4">
                  <img src={logo} alt="logo" width={"160px"} />
                </div>
                <div className="desc">
                  <p className='text-center'>Main Menu</p>
                </div>
                <nav className='mobile-menu-nav'>
                  <ul className='list-unstyled'>
                    <li className='py-2 ps-3'>
                      <a href="#" className='text-decoration-none'>Home</a>
                    </li>
                    <li className='py-2 ps-3'>
                      <a href="#" className='text-decoration-none'>Features</a>
                    </li>
                    <li className='py-2 ps-3'>
                      <a href="#" className='text-decoration-none'>Pricing</a>
                    </li>
                    <li className='py-2 ps-3'>
                      <a href="#" className='text-decoration-none'>How it Works</a>
                    </li>
                    <li className='py-2 ps-3'>
                      <a href="#" className='text-decoration-none'>About</a>
                    </li>
                    <li className='py-2 ps-3'>
                      <a href="#" className='text-decoration-none'>Contact</a>
                    </li>
                    <li className='py-2 ps-3'>
                      <a href="#" className='text-decoration-none'>
                        Others
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="mobile-menu-footer">
                  <h2 className="text-center mobile-menu-footer-title">Social</h2>
                  <ul className='d-flex justify-content-center gap-3 list-unstyled mt-3'>
                    <li className='left-border'>
                      <a className='text-decoration-none top-header-links-size' href="#">
                        <FontAwesomeIcon icon={faFacebook} size='xl' />
                      </a>
                    </li>
                    <li className='left-border'>
                      <a className='text-decoration-none top-header-links-size' href="#">
                        <FontAwesomeIcon icon={faInstagram} size='xl' />
                      </a>
                    </li>
                    <li>
                      <a className='text-decoration-none top-header-links-size' href="#">
                        <FontAwesomeIcon icon={faXTwitter} size='xl' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
