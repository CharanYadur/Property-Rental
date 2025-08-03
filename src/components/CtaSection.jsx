import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-center">
        <motion.h2
          className="fw-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Find Your Dream Home?
        </motion.h2>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the best rental properties in top locations. Let's help you make the right move today.
        </motion.p>

        <motion.button
          className="bannerBtn px-4 py-2 fw-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse Listings
        </motion.button>
      </div>
    </section>
  );
};

export default CtaSection;
