import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHome, FaHeadset, FaMapMarkedAlt } from 'react-icons/fa';

const features = [
    {
        icon: <FaShieldAlt size={32} />,
        title: 'Verified Listings',
        description: 'Every property is verified for accuracy, ownership, and safety.'
    },
    {
        icon: <FaHome size={32} />,
        title: 'Wide Range of Properties',
        description: 'From cozy studios to luxury villas, we cover every budget and need.'
    },
    {
        icon: <FaHeadset size={32} />,
        title: '24/7 Customer Support',
        description: 'Our team is available round the clock to assist you.'
    },
    {
        icon: <FaMapMarkedAlt size={32} />,
        title: 'Prime Locations',
        description: 'Choose from properties located in top neighborhoods.'
    },
];

const FeatureSection = () => {
    return (
        <section className="py-5" style={{ background: "#2d3337" }}>
            <div className="container">
                <motion.h2
                    className="text-center mb-5 fw-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: "#fff" }}
                >
                    Why Choose Us?
                </motion.h2>

                <div className="row">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="col-sm-12 col-md-6 col-lg-3 mb-4 rhombusCard"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.5 }} // 👈 Triggers on every scroll in
                        >
                            <div
                                className="card rhombus-wrapper shadow-sm"
                                style={{
                                    width: "100%",
                                    aspectRatio: "1/1",
                                    background: "#fff",
                                    transform: "rotate(45deg)",
                                    borderRadius: "20px",
                                    overflow: "hidden"
                                }}
                            >
                                <div
                                    className="rhombus-inner d-flex flex-column justify-content-center align-items-center text-center p-3"
                                    style={{ transform: "rotate(-45deg)", height: "100%", width: "100%" }}
                                >
                                    <div className="mb-3" style={{color:"#ed974c"}}>{feature.icon}</div>
                                    <h5 className="fw-semibold">{feature.title}</h5>
                                    <p className="text-muted">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
