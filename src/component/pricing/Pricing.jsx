import React from 'react';
import './Pricing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, } from '@fortawesome/free-regular-svg-icons';
import AOS from 'aos';


const pricingData = [
    {
        id: 10,
        dis: '25%!',
        type: 'Personal',
        title: 'All the features you need',
        price: '$156',
        subTitle: 'Includes Everything You Need:',
        info: 'Enjoy a range of features designed to enhance your project management experience, all at a price that fits your budget.',
        btnText: 'Get Started'
    },
    {
        id: 11,
        background: '#0B2230',
        white: '#fff',
        green: '#88E64A',
        dis: '80%!',
        type: 'Professional',
        title: 'All the features you need',
        price: '$256',
        subTitle: 'Includes Everything You Need:',
        info: 'Get set up for success with advanced support and services, extend your instance and unify your data.',
        btnText: 'Get Started'
    },
    {
        id: 12,
        type: 'Enterprise',
        title: 'All the features you need',
        cus_price: 'Custom Pricing',
        subTitle: 'Includes Everything You Need:',
        info: 'Get set up for success with advanced support and services, extend your instance and unify your data.',
        btnText: 'Get Started'
    }
]

const Pricing = () => {
    return (
        <section className='pricing-section' >
            <div className="py-5 px-4">
                <div className="wrapper">
                    <div className="mb-5 pb-5 text-center" data-aos="fade-up" data-aos-duration="1000">
                        <span className="tech-tag px-3 py-1">Pricing plans</span>
                        <div className="feature-details-box d-flex flex-column row-gap-3 mx-auto mt-4">
                            <div className="feature-title-box">
                                <h2 className="feature-title-heading text-start text-md-center text-white">Find the right package</h2>
                            </div>
                            <div className="feature-details">
                                <p className='text-start text-md-center text-white'>
                                    Enjoy a range of features designed to enhance your project management experience, all at a price that fits your budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 pricing-wrapper">
                <div className="wrapper">
                    <div className="pricing-container">
                        <div className="row row-gap-4" data-aos="fade-up-left" data-aos-duration="1300">
                            {pricingData.map(item => (
                                <div key={item.id} className="col-md-4">
                                    <div className="pricing-card">
                                        <div style={{ background: item.background }} className="card p-5 card-height">
                                            <div className="card-inner d-flex flex-column">
                                                {item.dis && (
                                                    <span className='discount-price'>
                                                        <FontAwesomeIcon icon={faCheckCircle} color="#88E64A" className="custom-check-icon me-2" />
                                                        <span style={{ color: item.white }}>{item.dis}</span>
                                                    </span>
                                                )}
                                                <h2 className='price-heading py-3' style={{ color: item.white }}>{item.type}</h2>
                                                <p className='price-details' style={{ color: item.white }}>{item.title}</p>
                                                <div className="pricing-line">
                                                    {item.price ? (<h2 style={{ color: item.green }} className='pricing-price'>{item.price} <span style={{ color: item.white }} className='pricing-month'>/months</span></h2>) : (<h2 className='pricing-price mb-4 pb-3'>{item.cus_price}</h2>)}
                                                </div>
                                                <p className='includes-everything' style={{ color: item.white }}>{item.subTitle}</p>
                                                <p className='price-desc' style={{ color: item.white }}>
                                                    {item.info}
                                                </p>
                                                <a style={{ background: item.green }} className="text-decoration-none position-relative login-btn get-started px-2 py-2 px-md-4 py-md-2" href="#">
                                                    <span style={{ color: item.white }}>
                                                        {item.btnText}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
