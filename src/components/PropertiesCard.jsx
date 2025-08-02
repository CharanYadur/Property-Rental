// import React from 'react'
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const PropertiesCard = ({ product }) => {  // Destructure the product prop directly
//     const [isWishlisted, setIsWishlisted] = useState(false);

//     const addToCart = () => {
//         alert(`${product.name} added to cart!`);
//     };

//     const toggleWishlist = () => {
//         setIsWishlisted(!isWishlisted);
//         alert(`${product.name} ${isWishlisted ? 'removed from' : 'added to'} wishlist!`);
//     };

//     return (
//         <div className="mb-4">
//             <div className="card product-card h-100" style={{borderRadius:"30px"}}>
//                 <motion.div
//                     initial={{ scale: 0.95 }}
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.4, ease: 'easeInOut' }}
//                 >
//                     <motion.img
//                         src={product.image}  // Changed from product?.image?.src to product.image
//                         className="card-img-top"
//                         alt={product.name}
//                         style={{ objectFit: 'cover', height: '250px', padding: '20px' }}
//                     />
//                 </motion.div>

//                 <div className="card-body d-flex flex-column">
//                     <h5 className="card-title">{product.name}</h5>
//                     <p className="card-text text-muted">{product.description}</p>
//                     <div className="mt-auto">
//                         <div className="d-flex justify-content-between align-items-center mb-2">
//                             <span className="h5" style={{ color: "#ed974c" }}>${product.price}</span>
//                             <button
//                                 className={`btn btn-sm ${isWishlisted ? 'btn-danger' : 'btn-outline-danger'}`}
//                                 onClick={toggleWishlist}
//                             >
//                                 ♥
//                             </button>
//                         </div>
//                         <button className="bannerBtn  w-100" onClick={addToCart}>
//                             View Property
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PropertiesCard




import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PropertiesCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const addToCart = () => {
        alert(`${product.name} added to cart!`);
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        alert(`${product.name} ${isWishlisted ? 'removed from' : 'added to'} wishlist!`);
    };

    return (
        <div className="mb-4">
            <div className="card product-card h-100 position-relative" style={{ borderRadius: "30px" }}>

                {product.freshness === "new" && (
                    <motion.div
                        className="position-absolute top-0 end-0 m-2 badge"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ zIndex: 10, backgroundColor: "#ed974c" }}
                    >
                        NEW
                    </motion.div>
                )}

                <motion.div
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                    <motion.img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                        style={{ objectFit: 'cover', height: '250px', padding: '20px' }}
                    />
                </motion.div>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                    <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="h5" style={{ color: "#ed974c" }}>${product.price}</span>
                            <button
                                className={`btn btn-sm ${isWishlisted ? 'btn-danger' : 'btn-outline-danger'}`}
                                onClick={toggleWishlist}
                            >
                                ♥
                            </button>
                        </div>
                        <button className="bannerBtn w-100" onClick={addToCart}>
                            View Property
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesCard;
