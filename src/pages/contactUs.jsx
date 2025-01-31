import React from 'react';
import '../styles/contactUs.scss'; // Import the SCSS file
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-us">
        <div className="contact-form">
          {/* <h2>Get in Touch</h2> */}
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea id="comment" rows="5" name="comment" placeholder="Comment" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Get In Touch!</h2>
          <p>1234 Street Name</p>
          {/* <p>City, State, ZIP</p> */}
          <p>Phone: (251) 0911874965</p>
          <p>Phone: (251) 0704474965</p>
          <p>Email: info@guerillaethiopia.com</p>
          <p>Email: medhane@guerillaethiopia.com</p>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContactUs;