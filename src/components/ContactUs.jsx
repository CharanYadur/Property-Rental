import React from 'react';

const ContactUs = () => {
  return (
    <div className="container bg-dark text-white p-4 rounded-4 my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center mb-5">
        We'd love to hear from you! Whether you're a tenant, a property owner, or just curious about our platform,
        feel free to reach out with your questions or feedback.
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Get in Touch</h4>
          <p><strong>Email:</strong> <a href="mailto:support@rentease.in">support@rentease.in</a></p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 2nd Floor, Tech Plaza, Bengaluru, India</p>
          <p><strong>Support Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>

        <div className="col-md-6">
          <h4>Send Us a Message</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="bannerBtn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
