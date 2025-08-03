import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PropertyDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedLocation = location.state;
  console.log("SLECT", selectedLocation)
  

  if (!selectedLocation || !selectedLocation.properties) {
    return (
      <div className="container py-5 text-center">
        <h2>Properties Not Found</h2>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/')}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">
        Properties in {selectedLocation.name}
      </h2>
      <p className="text-center text-muted mb-5">{selectedLocation.description}</p>

      <div className="row">
        {selectedLocation.properties.map((property, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-dark shadow-sm h-100 text-white">
              <img
                src={property.imageLocation}
                alt={property.title}
                className="card-img-top p-4"
                style={{  }}
              />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text"><strong>Address:</strong> {property.address}</p>
                <p className="card-text"><strong>Price:</strong> {property.price}</p>
                <p className="card-text"><strong>Size:</strong> {property.size}</p>
                <p className="card-text"><strong>Type:</strong> {property.type}</p>
                <p className="card-text"><strong>Furnishing:</strong> {property.furnished}</p>
                <p className="card-text"><strong>Available From:</strong> {property.availableFrom}</p>
                <p className="mb-1"><strong>Features:</strong></p>
                <ul className="mb-2">
                  {property.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
          ← Back to Locations
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
