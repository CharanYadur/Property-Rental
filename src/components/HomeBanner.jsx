import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeBanner = () => {

    const slides = [
        {
            id: 1,
            title: 'Find Your Perfect Rental',
            description: 'Discover thousands of verified properties across top locations. Rent with confidence through our trusted platform.',
            buttonText: 'Browse Rentals',
            buttonLink: '/rentals',
        },
        {
            id: 2,
            title: 'Premium Listings Available',
            description: 'Exclusive collection of luxury apartments, villas, and penthouses with premium amenities.',
            buttonText: 'View Premium',
            buttonLink: '/premium',
        },
        {
            id: 3,
            title: 'List Your Property With Us',
            description: 'Reach thousands of qualified renters. We offer competitive rates and maximum exposure for your property.',
            buttonText: 'List Now',
            buttonLink: '/list-property',
        }
    ];
    const [index, setIndex] = useState(0);
    const [typedTitle, setTypedTitle] = useState('');

    const { title, description, buttonText, buttonLink } = slides[index];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]); 


    useEffect(() => {
        let current = 0;
        setTypedTitle('');
        const typingInterval = setInterval(() => {
            setTypedTitle(title.slice(0, current + 1));
            current++;
            if (current === title.length) clearInterval(typingInterval);
        }, 80); 

        return () => clearInterval(typingInterval);
    }, [title]);
    return (
        <section
            className="hero-section d-flex align-items-center justify-content-center text-center"
            style={{ minHeight: '90vh', backgroundColor: '#1a1a1a', color: 'white' }}
        >
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-lg-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.7 }}
                            >
                                <h1 className="display-5 fw-bold mb-4">
                                    {typedTitle}
                                    <span className="typing-cursor">|</span>
                                </h1>

                                <p className="lead mb-4">{description}</p>
                                <motion.a
                                    href={buttonLink}
                                    className="btn bannerBtn btn-light btn-lg"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {buttonText}
                                </motion.a>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .typing-cursor {
          display: inline-block;
          width: 1px;
          height: 1em;
          background-color: white;
          margin-left: 5px;
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </section>
    )
}

export default HomeBanner