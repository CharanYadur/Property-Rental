import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mumbaiImg from '../img/Mumbai.png';
import delhiImg from '../img/Delhi.png';
import bangaloreImg from '../img/Bangalore.png';
import chennaiImg from '../img/Chennai.png';
import hyderabadImg from '../img/hyderabad.png';
import puneImg from '../img/Pune.png';


const locations = [
    { name: 'Mumbai', image: mumbaiImg },
    { name: 'Delhi', image: delhiImg },
    { name: 'Bangalore', image: bangaloreImg },
    { name: 'Chennai', image: chennaiImg },
    { name: 'Hyderabad', image: hyderabadImg },
    { name: 'Pune', image: puneImg },
];

const Locations = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <motion.h2
                    className="text-center fw-bold mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Explore by Location
                </motion.h2>

                <div className="row">
                    {locations.map((location, index) => (
                        <motion.div
                            key={index}
                            className="col-sm-6 col-md-4 col-lg-4 mb-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="card location-card h-100 shadow-sm py-3" style={{ borderRadius: "20px", overflow: 'hidden', backgroundColor:"#2d3337" }}>
                                <div className='d-flex justify-content-center'>
                                    <motion.img
                                        src={location.image}
                                        alt={location.name}
                                        className="card-img-top"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            width: "60%",           // Adjust width as needed (e.g., 60%, 150px)
                                            height: "150px",        // Set height explicitly
                                            objectFit: "cover",
                                            borderRadius: "12px",   // Optional: round corners of image
                                        }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title d-flex justify-content-center align-items-center gap-2 fw-semibold">
                                        <FaMapMarkerAlt className="text-danger" /> {location.name}
                                    </h5>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Locations;
