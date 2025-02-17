import React, { useState, useRef } from 'react';
import '../styles/contactUs.scss'; // Import the SCSS file
import { Email, LocationOn, Phone } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const refForm = useRef(null);
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to EmailJS here
    emailjs.sendForm(
      'service_7ex10wc', // service key
      'template_wf8uowi', // template key new
      refForm.current, // select the form to be sent
      '1fiMNHDFHzYxPTCIj' // public key
    )
      // emailjs.send('service_7ex10wc', 'template_wf8uowi', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        alert('Message sent successfully');
      }, (err) => {
        console.log(err);

        console.log('FAILED...', err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="containerPaddingBig">
        <div className="contact-us-header">
          <h1>Contact our team</h1>
          <p className="subtitle">
            Got any questions about our marketing services or how we can help your business grow? We're here to assist.<br />
            Reach out to our friendly team and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-us">
          <div className="contact-form-section">
            <form ref={refForm} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full name</label>
                  <input type="text" id="name" name="name" placeholder="Full name" required value={formData.fullName} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+251 09000000" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Leave us a message..." rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="send-message">Send message</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Chat with us</h2>
            <p>Speak to our friendly team.</p>
            <div className="contact-links">
              <div className="contact-link">
                <Email /> <a href="mailto:info@marketingagency.com" className="contact-link">Shoot us an email</a>
              </div>
            </div>

            <h2>Call us</h2>
            <p>Call our team using this numbers.</p>
            <div className="contact-links">
              <div className="contact-link">
                <Phone /> <a href="tel:+251911674965" className="contact-link">0911674965</a>
              </div>
              <div className="contact-link">
                <Phone /> <a href="tel:+2519704674965" className="contact-link">0704674965</a>
              </div>
            </div>

            <h2>Visit us</h2>
            <p>Chat to us in person at our Melbourne HQ.</p>
            <div className="contact-link">
              <LocationOn /> <a href="#" className="contact-link">100 Smith Street, Collingwood VIC 3066</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;