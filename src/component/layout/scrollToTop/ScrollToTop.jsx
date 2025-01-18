import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const calculateScrollProgress = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        setScrollProgress(progress);
    };

    const handleScroll = () => {
        calculateScrollProgress();
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <div className="progress-container">
                        {/* SVG for Circular Progress */}
                        <svg className="progress-svg" width="60" height="60" viewBox="0 0 36 36">
                            <circle className="progress-bg" cx="18" cy="18" r="16" />
                            <circle
                                className="progress-bar"
                                cx="18"
                                cy="18"
                                r="16"
                                style={{ strokeDashoffset: `${100 - scrollProgress}` }}
                            />
                        </svg>
                        {/* Font Awesome Icon */}
                        <FontAwesomeIcon icon={faArrowUp} className="scroll-icon" />
                    </div>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
