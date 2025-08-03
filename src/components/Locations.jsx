import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import mumbaiImg from '../img/Mumbai.png';
import delhiImg from '../img/Delhi.png';
import bangaloreImg from '../img/Bangalore.png';
import chennaiImg from '../img/Chennai.png';
import hyderabadImg from '../img/hyderabad.png';
import puneImg from '../img/Pune.png';
import { useNavigate } from 'react-router-dom';
import mumbai1 from '../img/mumbai1.webp';
import mumbai2 from '../img/mumbai2.png';
import mumbai3 from '../img/mumbai3.png';
import mumbai4 from '../img/mumbai4.png';
import delhi1 from '../img/delhi1.png';
import delhi2 from '../img/delhi2.png';
import delhi3 from '../img/delhi3.png';
import delhi4 from '../img/delhi4.png';
import bangalore1 from '../img/bangalore1.png';
import bangalore2 from '../img/bangalore2.png';
import bangalore3 from '../img/bangalore3.png';
import bangalore4 from '../img/bangalore4.png';
import chennai1 from '../img/chennai1.png';
import chennai2 from '../img/chennai2.webp';
import chennai3 from '../img/chennai3.webp';
import chennai4 from '../img/chennai4.webp';


const locations = [
    {
        name: 'Mumbai',
        image: mumbaiImg,
        description: "Explore luxury and budget homes in Mumbai's top areas like Andheri, Bandra, and Powai.",
        properties: [
            {
                id: 1,
                title: "Modern 2BHK Apartment in Andheri",
                address: "JP Road, Andheri West",
                price: "₹42,000/month",
                size: "950 sq.ft",
                type: "Apartment",
                furnished: "Fully Furnished",
                availableFrom: "2025-09-01",
                features: ["Modular Kitchen", "Balcony", "Reserved Parking"],
                image: mumbaiImg,
                imageLocation: mumbai1
            },
            {
                id: 2,
                title: "Studio Apartment in Bandra",
                address: "Bandra East",
                price: "₹28,000/month",
                size: "400 sq.ft",
                type: "Studio",
                furnished: "Semi-Furnished",
                availableFrom: "2025-08-15",
                features: ["Close to Station", "Wi-Fi Included", "AC"],
                image: mumbaiImg,
                imageLocation: mumbai2
            },
            {
                id: 3,
                title: "3BHK in Powai",
                address: "Hiranandani, Powai",
                price: "₹60,000/month",
                size: "1250 sq.ft",
                type: "Penthouse",
                furnished: "Unfurnished",
                availableFrom: "2025-08-20",
                features: ["Lake Facing", "Swimming Pool", "Gym"],
                image: mumbaiImg,
                imageLocation: mumbai3
            },
            {
                id: 4,
                title: "Compact 1BHK in Dadar",
                address: "Dadar East",
                price: "₹22,000/month",
                size: "500 sq.ft",
                type: "Flat",
                furnished: "Furnished",
                availableFrom: "2025-08-05",
                features: ["Market Nearby", "CCTV", "Lift"],
                image: mumbaiImg,
                imageLocation: mumbai4
            }
        ]
    },
    {
        name: 'Delhi',
        image: delhiImg,
        description: "Budget-friendly and mid-range properties in Saket, Rohini, and Lajpat Nagar.",
        properties: [
            {
                id: 1,
                title: "1BHK in Saket",
                address: "Saket, South Delhi",
                price: "₹18,000/month",
                size: "600 sq.ft",
                type: "Flat",
                furnished: "Unfurnished",
                availableFrom: "2025-08-10",
                features: ["Ground Floor", "Park Facing"],
                image: delhiImg,
                imageLocation: delhi1
            },
            {
                id: 2,
                title: "2BHK in Rohini",
                address: "Rohini Sector 9",
                price: "₹28,000/month",
                size: "850 sq.ft",
                type: "Apartment",
                furnished: "Semi-Furnished",
                availableFrom: "2025-08-25",
                features: ["Security", "Balcony", "Power Backup"],
                image: delhiImg,
                 imageLocation: delhi2
            },
            {
                id: 3,
                title: "Studio in Lajpat Nagar",
                address: "Lajpat Nagar 1",
                price: "₹20,000/month",
                size: "350 sq.ft",
                type: "Studio",
                furnished: "Furnished",
                availableFrom: "2025-09-01",
                features: ["Wi-Fi", "Metro Access", "Compact Kitchen"],
                image: delhiImg,
                 imageLocation: delhi3
            },
            {
                id: 4,
                title: "3BHK with Park View",
                address: "Greater Kailash",
                price: "₹48,000/month",
                size: "1100 sq.ft",
                type: "Flat",
                furnished: "Fully Furnished",
                availableFrom: "2025-08-18",
                features: ["Gym Access", "Covered Parking"],
                image: delhiImg,
                 imageLocation: delhi4
            }
        ]
    },
    {
        name: 'Bangalore',
        image: bangaloreImg,
        description: "Modern rentals in Whitefield, Indiranagar, and Electronic City.",
        properties: [
            {
                id: 1,
                title: "1RK in Electronic City",
                address: "Electronic City Phase 1",
                price: "₹12,000/month",
                size: "400 sq.ft",
                type: "Room",
                furnished: "Furnished",
                availableFrom: "2025-08-10",
                features: ["Wi-Fi", "Inverter", "Close to IT Park"],
                image: bangaloreImg,
                imageLocation: bangalore1
            },
            {
                id: 2,
                title: "2BHK in Whitefield",
                address: "Whitefield Main Road",
                price: "₹32,000/month",
                size: "1000 sq.ft",
                type: "Flat",
                furnished: "Semi-Furnished",
                availableFrom: "2025-08-28",
                features: ["Swimming Pool", "Gym", "Lift"],
                image: bangaloreImg,
                imageLocation: bangalore2
            },
            {
                id: 3,
                title: "1BHK in Indiranagar",
                address: "100 Feet Road",
                price: "₹24,000/month",
                size: "650 sq.ft",
                type: "Apartment",
                furnished: "Fully Furnished",
                availableFrom: "2025-08-05",
                features: ["Balcony", "Smart Lock", "Power Backup"],
                image: bangaloreImg,
                imageLocation: bangalore3
            },
            {
                id: 4,
                title: "3BHK in HSR Layout",
                address: "HSR Sector 2",
                price: "₹45,000/month",
                size: "1150 sq.ft",
                type: "Flat",
                furnished: "Unfurnished",
                availableFrom: "2025-09-05",
                features: ["Clubhouse", "CCTV", "Parking"],
                image: bangaloreImg,
                imageLocation: bangalore4
            }
        ]
    },
    {
        name: 'Chennai',
        image: chennaiImg,
        description: "Peaceful homes in Velachery, OMR, and Adyar for families and students.",
        properties: [
            {
                id: 1,
                title: "2BHK in Velachery",
                address: "Velachery Main Road",
                price: "₹20,000/month",
                size: "800 sq.ft",
                type: "Apartment",
                furnished: "Furnished",
                availableFrom: "2025-08-15",
                features: ["Lift", "Power Backup", "Gated Community"],
                image: chennaiImg,
                imageLocation: chennai1
            },
            {
                id: 2,
                title: "Studio in OMR",
                address: "OMR Navalur",
                price: "₹15,000/month",
                size: "350 sq.ft",
                type: "Studio",
                furnished: "Semi-Furnished",
                availableFrom: "2025-08-20",
                features: ["Compact Kitchen", "Public Transport Nearby"],
                imageLocation: chennai2
            },
            {
                id: 3,
                title: "1BHK in Adyar",
                address: "LB Road, Adyar",
                price: "₹17,500/month",
                size: "600 sq.ft",
                type: "Flat",
                furnished: "Unfurnished",
                availableFrom: "2025-08-30",
                features: ["Parking", "Peaceful Area", "Balcony"],
                image: chennaiImg,
                imageLocation: chennai3
            },
            {
                id: 4,
                title: "3BHK with Sea View",
                address: "Besant Nagar",
                price: "₹48,000/month",
                size: "1300 sq.ft",
                type: "Apartment",
                furnished: "Fully Furnished",
                availableFrom: "2025-09-01",
                features: ["Sea Facing", "Gym", "Clubhouse"],
                image: chennaiImg,
                imageLocation: chennai4
            }
        ]
    },
    {
        name: 'Hyderabad',
        image: hyderabadImg,
        description: "Spacious and tech-friendly homes near Hitech City, Gachibowli, and Banjara Hills.",
        properties: [
            {
                id: 1,
                title: "3BHK in Gachibowli",
                address: "Near Wipro Campus",
                price: "₹38,000/month",
                size: "1100 sq.ft",
                type: "Flat",
                furnished: "Semi-Furnished",
                availableFrom: "2025-08-20",
                features: ["Close to IT Park", "CCTV", "Swimming Pool"],
                image: hyderabadImg,
                imageLocation: mumbai1
            },
            {
                id: 2,
                title: "1BHK in Madhapur",
                address: "Madhapur Main Road",
                price: "₹16,000/month",
                size: "500 sq.ft",
                type: "Apartment",
                furnished: "Furnished",
                availableFrom: "2025-08-12",
                features: ["Lift", "Near Metro", "Market Nearby"],
                image: hyderabadImg,
                 imageLocation: delhi1
            },
            {
                id: 3,
                title: "2BHK in Banjara Hills",
                address: "Road No. 12, Banjara Hills",
                price: "₹40,000/month",
                size: "1000 sq.ft",
                type: "Apartment",
                furnished: "Fully Furnished",
                availableFrom: "2025-08-22",
                features: ["Balcony", "Park Facing", "Covered Parking"],
                image: hyderabadImg,
                 imageLocation: chennai1
            },
            {
                id: 4,
                title: "1RK in Kondapur",
                address: "Opposite Botanical Garden",
                price: "₹12,500/month",
                size: "300 sq.ft",
                type: "Room",
                furnished: "Semi-Furnished",
                availableFrom: "2025-08-08",
                features: ["Security", "Geyser", "Wi-Fi"],
                image: hyderabadImg,
                 imageLocation: bangalore1
            }
        ]
    },
    {
        name: 'Pune',
        image: puneImg,
        description: "Student-friendly and family homes in Viman Nagar, Hinjewadi, and Kothrud.",
        properties: [
            {
                id: 1,
                title: "1BHK in Viman Nagar",
                address: "Near Phoenix Mall",
                price: "₹17,000/month",
                size: "600 sq.ft",
                type: "Apartment",
                furnished: "Furnished",
                availableFrom: "2025-08-05",
                features: ["Airport Proximity", "Safe Area", "Lift"],
                image: puneImg,
                 imageLocation: bangalore2
            },
            {
                id: 2,
                title: "2BHK in Hinjewadi",
                address: "Phase 2, Hinjewadi",
                price: "₹26,000/month",
                size: "950 sq.ft",
                type: "Flat",
                furnished: "Semi-Furnished",
                availableFrom: "2025-08-15",
                features: ["Club House", "Security", "Gym"],
                image: puneImg,
                 imageLocation: chennai2
            },
            {
                id: 3,
                title: "3BHK in Kothrud",
                address: "Paud Road, Kothrud",
                price: "₹34,000/month",
                size: "1150 sq.ft",
                type: "Apartment",
                furnished: "Unfurnished",
                availableFrom: "2025-08-25",
                features: ["Spacious Rooms", "Gated Society", "Play Area"],
                image: puneImg,
                 imageLocation: delhi2
            },
            {
                id: 4,
                title: "Studio in Wakad",
                address: "Datta Mandir Road, Wakad",
                price: "₹13,500/month",
                size: "320 sq.ft",
                type: "Studio",
                furnished: "Furnished",
                availableFrom: "2025-09-01",
                features: ["Wi-Fi", "Laundry", "CCTV"],
                image: puneImg,
                 imageLocation: mumbai2
            }
        ]
    }
];


const Locations = () => {
    const navigate = useNavigate();

    const handleCardClick = (location) => {
        navigate('/propertyDetails', { state: location });
    };
    return (
        <section className="py-5">
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
                            viewport={{ once: false, amount: 0.5 }}
                            onClick={() => handleCardClick(location)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="card location-card h-100 shadow-sm py-3" style={{ borderRadius: "20px", overflow: 'hidden', backgroundColor: "#2d3337" }}>
                                <div className='d-flex justify-content-center'>
                                    <motion.img
                                        src={location.image}
                                        alt={location.name}
                                        className="card-img-top"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            width: "60%",
                                            height: "150px",
                                            objectFit: "cover",
                                            borderRadius: "12px",
                                        }}
                                    />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title d-flex justify-content-center align-items-center gap-2 fw-semibold" style={{ color: "#fff" }}>
                                        <FaMapMarkerAlt style={{ color: "#ed974c" }} /> {location.name}
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
