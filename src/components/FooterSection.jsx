import React from 'react';
import { motion } from 'framer-motion';

const FooterSection = () => {
    const zoomVariant = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <footer className="footer bg-dark text-white py-5 ">
            <div className="container">
                <div className="row">
                    <motion.div
                        className="col-md-4"
                        variants={zoomVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h5>RentEase</h5>
                        <p>Your trusted platform for renting properties.</p>
                    </motion.div>

                    <motion.div
                        className="col-md-4"
                        variants={zoomVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-light">Home</a></li>
                            <li><a href="/properties" className="text-light">Browse Properties</a></li>
                            <li><a href="/list-property" className="text-light">List Your Property</a></li>
                            <li><a href="/about" className="text-light">About Us</a></li>
                            <li><a href="/contact" className="text-light">Contact</a></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="col-md-4"
                        variants={zoomVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <h5>Contact Info</h5>
                        <p>📧 info@rentease.com</p>
                        <p>📞 +1 (555) 123-4567</p>
                        <p>📍 123 Renting St, City, State 12345</p>
                    </motion.div>
                </div>

                <hr className="my-4" />
                <div className="text-center">
                    <p>&copy; 2024 RentEase. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;
