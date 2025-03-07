import React from 'react';
import '../../styles/ourTeam.scss';

import multichoice from '../../assets/images/multichoice.png';
import { Email, LinkedIn, Twitter } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import gmphoto from '../../assets/images/gmimage.jpg';
import personplaceHolder from '../../assets/images/personplaceHolder.webp';
import femaleplaceholder from '../../assets/images/femaleplaceholder.webp';
import nahum from '../../assets/images/nahomimage.jpg';
import paulos from '../../assets/images/paulosImage.jpg';
import { Reveal } from '../reveal';

const teamMembers = [
  {
    name: 'Medhane Melesse',
    role: 'General Manager',
    description: 'A visionary leader with over 12 years of experience, Medhane drives innovative marketing strategies and large-scale event executions, ensuring impactful results for clients across Ethiopia and beyond.',
    image: gmphoto,
    linkedin: 'https://www.linkedin.com/in/medhane-melesse-salasibew-103234161',
    x: '#',
    email: 'medhanemeles@gmail.com',
  },
  {
    name: 'Paulos Degu',
    role: 'Opration Coordinator',
    description: 'Paulos ensures seamless day-to-day operations, overseeing project execution and resource coordination to maintain the company’s high standards of efficiency and excellence.',
    image: paulos,
    linkedin: '#',
    x: '#',
    email: 'Papidegu@gmail.com',
  },
  {
    name: 'Nahum Gebrhale Ayele',
    role: 'BTL coordinator',
    description: 'Nahum specializes in designing and executing targeted below-the-line marketing campaigns, creating engaging brand experiences that resonate with audiences.',
    image: nahum,
    linkedin: '#',
    x: 'https://x.com/Nahum31949177?t=M3jTqBwuCpOWG20vnsUttw&s=35',
    email: 'nahomgebrial@gmail.com',
  },
  // {
  //   name: 'James Brown',
  //   role: 'Data Analyst',
  //   description: 'James analyzes market trends to inform our strategies and optimize campaign performance.',
  //   image: multichoice,
  //   linkedin: '#',
  //   x: '#',
  //   dribbble: '#',
  // },
];

const OurTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  // Use the useInView hook
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="our-team containerPaddingBig">
      <div className="headerCommon">
        <Reveal>
          <div className="subtitle">Our Team</div>
        </Reveal>
        <Reveal>
          <p className="description">Meet the talented individuals driving our success.</p>
        </Reveal>
      </div>
      <motion.div
        initial="hidden"
        variants={containerVariants}
        animate={isInView ? "visible" : "hidden"}
        ref={ref}
        className="team-members">
        {teamMembers.map((member, index) => (
          <motion.div
            className="team-member"
            key={index}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}

          >
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
            <p className="description">{member.description}</p>
            <div className="social-links">
              {member.linkedin !== '#' && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedIn />
                </a>
              )}
              {member.x !== '#' && (
                <a href={member.x} target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              )}
              {member.email && (
                <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                  <Email />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurTeam;
