import React from 'react';
import '../../styles/ourTeam.scss';

import multichoice from '../../assets/images/multichoice.png';
import { Email, LinkedIn, Twitter } from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import gmphoto from '../../assets/images/gmimage.jpg';
import { Reveal } from '../reveal';

const teamMembers = [
  {
    name: 'Medhane Melesse',
    role: 'General Manager',
    description: 'Passionate about innovative design and brand storytelling, Alice leads our creative initiatives.',
    image: gmphoto,
    linkedin: '#',
    x: '#',
    dribbble: '#',
  },
  {
    name: 'Mark Smith',
    role: 'Project Manager',
    description: 'Mark ensures seamless execution of projects, keeping teams aligned and clients satisfied.',
    image: multichoice,
    linkedin: '#',
    x: '#',
    dribbble: '#',
  },
  {
    name: 'Sophia Lee',
    role: 'Marketing Strategist',
    description: 'Sophia crafts compelling marketing strategies that resonate with audiences and drive engagement.',
    image: multichoice,
    linkedin: '#',
    x: '#',
    dribbble: '#',
  },
  {
    name: 'James Brown',
    role: 'Data Analyst',
    description: 'James analyzes market trends to inform our strategies and optimize campaign performance.',
    image: multichoice,
    linkedin: '#',
    x: '#',
    dribbble: '#',
  },
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}

          >
            <img src={member.image} alt={member.name} className="member-image" />
            <div className="member-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
            <p className="description">{member.description}</p>
            <div className="social-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
              <a href={member.x} target="_blank" rel="noopener noreferrer"><Twitter /></a>
              <a href={member.dribbble} target="_blank" rel="noopener noreferrer"><Email /></a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OurTeam;
