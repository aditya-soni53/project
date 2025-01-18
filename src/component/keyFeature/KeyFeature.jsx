import React from 'react';
import './keyfeature.css'
import { ArrowRight } from 'lucide-react';
import img1 from '../../assets/keyFeature/key-feature1.svg'
import img2 from '../../assets/keyFeature/key-feature2.svg'
import img3 from '../../assets/keyFeature/key-feature3.svg'
import img4 from '../../assets/keyFeature/key-feature4.svg'
import img5 from '../../assets/keyFeature/key-feature5.svg'
import img6 from '../../assets/keyFeature/key-feature6.svg'
import AOS from 'aos';


const newFeatures = [
    {
        id: 4,
        img: img1,
        name: 'Speed',
        desc: 'Swift approvals ensuring your business stays ahead in crucial decisions.',
    },
    {
        id: 5,
        img: img2,
        name: 'Flexibility',
        desc: 'Tailored solutions adapting seamlessly to your evolving business.',
    },
    {
        id: 6,
        img: img3,
        name: 'Confidence',
        desc: 'Reliable support fostering trust, providing assurance for your aspirations.',
    },
    {
        id: 7,
        img: img4,
        name: 'Data integration',
        desc: 'Our data integration solutions unify data sets, enabling real-time insights and strategic decision-making.',
    },
    {
        id: 8,
        img: img5,
        name: 'Supply chain optimization',
        desc: 'Leverage data analytics and predictive algorithms to optimize inventory and supplier relationships.',
    },
    {
        id: 9,
        img: img6,
        name: 'Process automation',
        desc: 'Streamline your workflows and reduce manual tasks. Enhance efficiency, and focus on strategic initiatives.',
    },
]

const KeyFeature = () => {

    AOS.init();

    return (
        <section className='key_feature-section'>
            <div className="py-5 px-4">
                <div className="wrapper">
                    <div className="mb-4 text-center" data-aos="fade-up" data-aos-duration="1000">
                        <span className="tech-tag px-3 py-1">Key Features</span>
                        <div className="feature-details-box d-flex flex-column row-gap-3 mx-auto mt-4">
                            <div className="feature-title-box">
                                <h2 className="feature-title-heading text-start text-md-center">Every feature you need, all in a single system.</h2>
                            </div>
                            <div className="feature-details">
                                <p className='text-start text-md-center'>
                                    Explore a spectrum of solutions meticulously designed to empower your business growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="new_feature-details mt-5">
                        <div className="row row-gap-3" data-aos="fade-down" data-aos-duration="1500">
                            {newFeatures.map((item) => (
                                <div key={item.id} className="col-md-4">
                                    <div className="card card-hover h-100 border-0 bg-light">
                                        <div className="card-body p-4 d-flex flex-column justify-content-between">
                                            <div className="d-inline-flex mb-3">
                                                <img src={item.img} width={80} alt="" />
                                            </div>
                                            <h3 className="card-title h4 mb-3">{item.name}</h3>
                                            <p className="card-text text-muted mb-4">
                                                {item.desc}
                                            </p>
                                            <a href="#" className="text-success cus-hover text-decoration-none d-inline-flex align-items-center">
                                                Learn More
                                                <ArrowRight className="ms-2" size={20} />
                                            </a>
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

export default KeyFeature;
