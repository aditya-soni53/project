import React from 'react';
import './reviews.css'
import img1 from '../../assets/testimonial/testimonial1.webp'
import img2 from '../../assets/testimonial/testimonial2.webp'
import img3 from '../../assets/testimonial/testimonial3.webp'
import img4 from '../../assets/testimonial/testimonial4.webp'
import AOS from 'aos';


const reviewsData = [
    {
        id: 12,
        img: img1,
        name: 'Michael Smith',
        position: 'Operations Director',
        desc: 'Enjoy a range of features designed to enhance your project management experience, all at a price that fits your budget.'
    },
    {
        id: 13,
        img: img2,
        name: 'Alexa Math',
        position: 'Business Owner',
        desc: 'Take advantage of a suite of features tailored to elevate your project management, all at a budget- friendly price.'
    },
    {
        id: 14,
        img: img3,
        name: 'Ami Smith',
        position: 'Shop Keeper',
        desc: 'Experience powerful project management tools that streamline your workflow, all while staying within your budget.'
    },
    {
        id: 14,
        img: img4,
        name: 'Michael Jackson',
        position: 'Operations Director',
        desc: 'Access advanced features to boost your project management efficiency, without breaking the bank.'
    },
]

const Reviews = () => {

    AOS.init();

    return (
        <section className='reviews-section mt-2 my-5 '>
            <div className="px-4">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000">
                            <div className="mb-4 ">
                                <div className="mb-3">
                                    <span className="tech-tag px-3 py-1">Reviews</span>
                                </div>
                                <div className="reviews-details-container">
                                    <h2 className='reviews-heading'>
                                        What Our Customers Say
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
                            <div className="p-3 p-md-5 reviews-description">
                                <p>
                                    Witness firsthand the user appreciation for our uncomplicated ticketing system in their daily activities.
                                </p>
                                <a href="#" className="text-decoration-none position-relative get-started-btn px-2 py-2 px-md-4 py-md-2">
                                    <span className='position-relative z-2'>View All Reviews</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-card-container">
                        <div className="row row-gap-4">
                            {reviewsData.map((item) => (
                                <div key={item.id} className="col-md-6" data-aos="fade-up" data-aos-duration="1300" >
                                    <div className="card card-hover h-100 border-0 bg-light">
                                        <div className="card-body p-4">
                                            <div className="reviews-card-name d-flex justify-content-between">
                                                <span className='reviews-card-name'>{item.name}</span>
                                                <span className='reviews-card-name'>{item.position}</span>
                                            </div>
                                            <div className="reviews-card-description d-flex flex-column flex-md-row align-items-center mt-3">
                                                <img src={item.img} alt="" width={150} />
                                                <p className='client-say' >{item.desc}</p>
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

export default Reviews;
