import React from 'react';
import './feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../assets/feature/feature-1.svg'
import img2 from '../../assets/feature/feature-2.svg'
import img3 from '../../assets/feature/feature-3.svg'

const featuresData = [
    {
        id: 1,
        img: img1,
        title: 'Discover AI-driven marketing tools',
        details: 'Discover AI-driven marketing tools that optimize your content and boost engagement.',
        text1: 'Eliminate Repetition',
        text2: 'Boost Efficiency',
        btnText: 'View Pricing',
        rowReverse: false
    },
    {
        id: 2,
        img: img2,
        title: 'Custom cloud software solutions',
        details: 'Utilize strong messaging and ticket updates to provide customers with the exceptional support they deserve.',
        text1: 'Eliminate Repetition',
        text2: 'Strong Messaging',
        btnText: 'View Pricing',
        rowReverse: true
    },
    {
        id: 3,
        img: img3,
        title: 'Performance and optimization',
        details: 'Discover strategies to optimize workflows, improve response times, and maximize efficiency. Implement best practices to ensure your software operates smoothl.',
        text1: 'Improve response times',
        text2: 'Free Optimization',
        btnText: 'View Pricing',
        rowReverse: false
    }
]

const Feature = () => {
    return (
        <section className='feature-section'>
            <div className="py-5 px-4">
                <div className="wrapper">
                    <div className="mb-4 text-center">
                        <span className="tech-tag px-3 py-1">Features</span>
                        <div className="feature-details-box d-flex flex-column row-gap-3 mx-auto mt-4">
                            <div className="feature-title-box">
                                <h2 className="feature-title-heading text-start text-md-center">Features That Simplify The Ticketing Process</h2>
                            </div>
                            <div className="feature-details">
                                <p className='text-start text-md-center'>
                                    Explore features that enhance team synergy, streamline ticket management, and increase productivity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-details mt-5">
                        {featuresData.map((item) => (
                            <div key={item.id} className={`row align-items-center mb-4 mb-md-5 pb-md-5 ${item.rowReverse ? 'flex-row-reverse' : ''}`}>
                                <div className="col-md-6">
                                    <div className="feature-img">
                                        <img src={item.img} className='w-100' alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box px-md-5 py-2">
                                        <div className="d-flex flex-column row-gap-1 row-gap-md-3">
                                            <div className="">
                                                <h2 className='feature-title text-start'>{item.title}</h2>
                                            </div>
                                            <div className="">
                                                <p className='text-start'>
                                                    {item.details}
                                                </p>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row gap-md-4">
                                                <div className="text-start">
                                                    <FontAwesomeIcon icon={faCheckCircle} color="#88E64A" className="custom-check-icon me-2" />
                                                    <span>{item.text1}</span>
                                                </div>
                                                <div className="text-start">
                                                    <FontAwesomeIcon icon={faCheckCircle} color="#88E64A" className="custom-check-icon me-2" />
                                                    <span>{item.text2}</span>
                                                </div>
                                            </div>
                                            <div className="text-start mt-3">
                                                <a className="text-decoration-none position-relative login-btn px-2 py-2 px-md-4 py-md-2" href="#">
                                                    <span className='text-green'>
                                                        {item.btnText}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;
