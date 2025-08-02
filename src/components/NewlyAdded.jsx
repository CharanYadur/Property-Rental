// import React from 'react'
// import apartment from '../img/apartment.png';
// import apartment2 from '../img/apartment2.png';
// import villa from '../img/villa.png';
// import office from '../img/office.png';
// import { motion } from 'framer-motion';
// import PropertiesCard from './PropertiesCard';

// const NewlyAdded = () => {
//     const featuredProperties = [
//         {
//             id: 1,
//             name: "Luxury Apartment",
//             price: 2500,
//             description: "Modern 2-bedroom apartment with city views and premium amenities.",
//             image: apartment
//         },
//         {
//             id: 2,
//             name: "Beachfront Villa",
//             price: 4500,
//             description: "Spacious 4-bedroom villa with private pool and ocean views.",
//             image: villa
//         },
//         {
//             id: 3,
//             name: "Downtown Office Space",
//             price: 1800,
//             description: "Professional workspace in prime business district with great connectivity.",
//             image: office
//         },
//         {
//             id: 4,
//             name: "Cozy Studio Flat",
//             price: 1200,
//             description: "Fully furnished studio perfect for young professionals or students.",
//             image: apartment2
//         },
//     ];
//     return (
//         <section className="py-5">
//             <div className="px-5">
//                 <motion.h3
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: false, amount: 0.5 }}
//                     transition={{ duration: 0.5 }}
//                     className="display-6 fw-bold text-center mb-4"
//                     style={{ color: "#2d3337" }}
//                 >
//                     Featured Properties
//                 </motion.h3>

//                 {/* 👇 Zoom animation on scroll */}
//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: false, amount: 0.3 }}
//                     transition={{ duration: 0.6, ease: "easeOut" }}
//                     className="row"
//                     style={{
//                         background: "#2d3337",
//                         padding: "30px",
//                         borderRadius: "30px"
//                     }}
//                 >
//                     {featuredProperties.map(property => (
//                         <PropertiesCard key={property.id} product={property} />
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     )
// }

// export default NewlyAdded


import React from 'react';
import apartment from '../img/apartment.png';
import apartment2 from '../img/apartment2.png';
import villa from '../img/villa.png';
import office from '../img/office.png';
import { motion } from 'framer-motion';
import PropertiesCard from './PropertiesCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewlyAdded = () => {
    const featuredProperties = [
        {
            id: 1,
            name: "Luxury Apartment",
            price: 2500,
            description: "Modern 2-bedroom apartment with premium amenities.",
            image: apartment,
             freshness: "new"
        },
        {
            id: 2,
            name: "Beachfront Villa",
            price: 4500,
            description: "Spacious 4-bedroom villa with private pool and ocean views.",
            image: villa,
             freshness: "old"
        },
        {
            id: 3,
            name: "Downtown Office Space",
            price: 1800,
            description: "Professional workspace in prime business with great connectivity.",
            image: office,
             freshness: "new"
        },
        {
            id: 4,
            name: "Cozy Studio Flat",
            price: 1200,
            description: "Fully furnished studio perfect for young professionals or students.",
            image: apartment2,
             freshness: "old"
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="py-5">
            <div className="px-5">
                <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="display-6 fw-bold text-center mb-4"
                    style={{ color: "#2d3337" }}
                >
                    Featured Properties
                </motion.h3>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        background: "#2d3337",
                        padding: "30px",
                        borderRadius: "30px"
                    }}
                >
                    <Slider {...sliderSettings}>
                        {featuredProperties.map(property => (
                            <div key={property.id} className="px-2"> {/* spacing between cards */}
                                <div className="row">
                                    <PropertiesCard product={property} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </section>
    );
};

export default NewlyAdded;
