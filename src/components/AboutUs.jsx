import React from 'react';

const AboutUs = () => {
  return (
    <div className="container bg-dark text-white p-4 rounded-4 my-5">
      <h2 className="text-center mb-4">About RentEase</h2>

      <p className="lead text-center mb-5">
        Simplifying the rental experience for tenants and landlords across India.
      </p>

      <div className="row mb-4">
        <div className="col-md-6">
          <h4>Who We Are</h4>
          <p>
            RentEase is a trusted rental platform built to bridge the gap between property owners and tenants.
            With a focus on transparency, convenience, and reliability, we bring verified listings, powerful search filters,
            and seamless booking options under one roof.
          </p>
        </div>
        <div className="col-md-6">
          <h4>What We Offer</h4>
          <ul>
            <li>Wide range of verified rental properties across major Indian cities</li>
            <li>Smart filters to match your needs — budget, location, type, amenities, and more</li>
            <li>Direct landlord contact — no brokers or hidden charges</li>
            <li>Safe and secure listings with updated availability</li>
            <li>Easy-to-use interface for browsing, saving, and booking properties</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4>Our Mission</h4>
        <p>
          To make property renting simple, secure, and accessible for everyone —
          whether you're a student, a working professional, or a family searching for your next home.
        </p>
      </div>

      <div className="text-center mt-5">
        <h4>Contact Us</h4>
        <p>
          Have questions or feedback? Reach out to us anytime at <a href="mailto:support@rentease.in">support@rentease.in</a>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
