import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import blog1 from '../img/blog1.jpg';
import blog2 from '../img/blog2.jpg';
import blog3 from '../img/blog3.jpg';
import blog4 from '../img/blog4.jpg';


const blogs = [
  {
    title: 'Top 10 Tips for Renting a Home',
    description: 'Learn how to make your renting journey smooth and hassle-free with these expert tips.',
    image: blog1,
    date: 'Aug 1, 2025',
  },
  {
    title: 'How to Choose the Right Neighborhood',
    description: 'Explore key factors to consider when picking a location that suits your lifestyle.',
    image: blog2,
    date: 'Jul 25, 2025',
  },
  {
    title: 'Understanding Rental Agreements',
    description: 'Everything you need to know before signing your rental contract.',
    image: blog3,
    date: 'Jul 18, 2025',
  },
  {
    title: 'Hidden Costs in Rentals',
    description: 'Be aware of these hidden costs before renting your next property.',
    image: blog4,
    date: 'Jul 10, 2025',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000, 
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Blogs = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-5 " style={{backgroundColor:"#f3ece5ff"}}>
      <div className="mx-4 bg-dark rounded-4 py-3 b-5">
        <motion.h2
          className="text-center fw-bold mb-5 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Blogs
        </motion.h2>

        <Slider ref={sliderRef} {...sliderSettings}>
          {blogs.map((blog, index) => (
            <div key={index} className="px-3 pb-5">
              <motion.div
                className="card h-100 shadow-sm"
                style={{ borderRadius: '20px', overflow: 'hidden' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="fw-semibold">{blog.title}</h5>
                  <p className="text-muted">{blog.description}</p>
                  <small className="text-secondary mt-auto">{blog.date}</small>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blogs;
