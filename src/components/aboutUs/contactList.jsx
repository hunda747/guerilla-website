import React from 'react';
import '../../styles/contactList.scss';
import { Mail, Phone, LocationOn } from '@mui/icons-material';

const contacts = [
  {
    icon: <Mail className="icon" />, // Replace with an actual icon component if needed
    title: 'Contact',
    description: 'Reach out to us for exciting collaboration opportunities and innovative marketing solutions.',
    detail: ['info@guerillaethiopia.com', 'medhane@guerillaethiopia.com'],
  },
  {
    icon: <Phone className="icon" />, // Replace with an actual icon component if needed
    title: 'Phone',
    description: "Call us to discuss your brand's next big marketing adventure.",
    detail: ['+251 911 674 965', '+251 704 674 965'],
  },
  {
    icon: <LocationOn className="icon" />, // Replace with an actual icon component if needed
    title: 'Office',
    description: 'Visit us to brainstorm creative strategies and explore collaboration possibilities.',
    detail: ['Addis Ababa, Ethiopia, From 22 to Megenagna around Lem hotel'],
  },
];

const ContactList = () => {
  return (
    <div className="containerPaddingBig">

      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <div className="icon">{contact.icon}</div>
            <h3>{contact.title}</h3>
            <p>{contact.description}</p>
            {contact.detail.map((detail, index) => (
              <p key={index}><a href="#" >{detail}</a></p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
