import React, { useState } from 'react';
import './faq.css'
import AOS from 'aos';


const faqItems = [
    {
        question: "How can I contact the help desk?",
        answer: "You can contact our help desk through various channels..."
    },
    {
        question: "What types of issues can the help desk assist with?",
        answer: "Our help desk can assist with technical issues, account problems..."
    },
    {
        question: "Can the help desk assist remotely?",
        answer: "Yes, we provide remote assistance through screen sharing..."
    },
    {
        question: "What are the help desk's hours of operation?",
        answer: "The help desk operates Monday through Friday..."
    },
    {
        question: "Is there a way to check the status of my support request?",
        answer: "Yes, you can track your support request status..."
    }
];

const Faq = () => {
    
    AOS.init();

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
            <section className="faq-section">
                <div className="px-4 py-4">
                    <div className="wrapper pt-4 p-2 p-md-5 bg-zenix_dark faq-container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="pe-2 pe-md-5 ps-2">
                                    <div className="" data-aos="fade-right" data-aos-duration="1000">
                                        <span className="tech-tag px-3 py-1">FAQs</span>
                                    </div>
                                    <div className="mt-3" data-aos="fade-right" data-aos-duration="1300">
                                        <h2 className='faq-heading'>
                                            Frequently asked questions
                                        </h2>
                                        <p data-aos="fade-right" data-aos-duration="1600" className='faq-para mt-3 mb-4'>Discover our help desk FAQs to learn how we efficiently address your technical issues, ensuring you receive the support needed to stay productive and focused.</p>
                                        <a data-aos="fade-right" data-aos-duration="1900" href="#" className="text-decoration-none view-all-btn position-relative get-started-btn px-2 py-2 px-md-4 py-md-2 mt-4">
                                            <span className='position-relative z-2'>View All Questions</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5 mb-4 mt-md-0 mb-md-0">
                                <div className="card" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="card-body">
                                        <div className="accordion">
                                            {faqItems.map((item, index) => (
                                                <div key={index} className="accordion-item border-0 border-bottom">
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className={`accordion-button ${activeIndex === index ? '' : 'collapsed'} bg-white`}
                                                            onClick={() => toggleAccordion(index)}
                                                            style={{ boxShadow: 'none' }}
                                                        >
                                                            {item.question}
                                                        </button>
                                                    </h2>
                                                    <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                                                        <div className="accordion-body">
                                                            {item.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Faq;
