import React from 'react';
import '../../styles/eventShowcase.scss';

import event1 from '../../assets/images/showcasenegus1.png';
import event2 from '../../assets/images/showcaserol1.png';
import event3 from '../../assets/images/showcasesafari1.png';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    imgSrc: event3,
    altText: "Event 3",
    description: "We did a PR event for our client safaricom at 5 major towns in Ethiopia in the presence of high gov't officials and medias"
  },
  {
    imgSrc: event1,
    altText: "Event 1",
    description: "We conducted Negus Malt activation in Addis Ababa during x-mass holiday and March Womens Month campagin"
  },
  {
    imgSrc: event1,
    altText: "Event 1",
    description: "We conducted Negus Malt activation in Addis Ababa during x-mass holiday and March Womens Month campagin"
  },
  {
    imgSrc: event2,
    altText: "Event 2",
    description: "We did volume uplifiting camapgin for Roll deteregent"
  },
  {
    imgSrc: event2,
    altText: "Event 2",
    description: "We did volume uplifiting camapgin for Roll deteregent"
  },
  {
    imgSrc: event3,
    altText: "Event 3",
    description: "We did a PR event for our client safaricom at 5 major towns in Ethiopia in the presence of high gov't officials and medias"
  },
  {
    imgSrc: event1,
    altText: "Event 1",
    description: "We conducted Negus Malt activation in Addis Ababa during x-mass holiday and March Womens Month campagin"
  },
  {
    imgSrc: event1,
    altText: "Event 1",
    description: "We conducted Negus Malt activation in Addis Ababa during x-mass holiday and March Womens Month campagin"
  },
  {
    imgSrc: event2,
    altText: "Event 2",
    description: "We did volume uplifiting camapgin for Roll deteregent"
  },
  {
    imgSrc: event2,
    altText: "Event 2",
    description: "We did volume uplifiting camapgin for Roll deteregent"
  }
];

const EventShowcase = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div className="event-showcase" ref={targetRef}>
      <div className="headerCommon">
        <div className="subtitle">Event Showcase</div>
        <p className="description">Explore our vibrant past events and successful campaigns.</p>
      </div>
      <section ref={targetRef} className="slider">
        <div className="slide-container">
          <motion.div style={{ x }} className="gallery">
            {events.map((event, index) => (
              <div className="image-placeholder" key={index} >
                <img src={event.imgSrc} alt={event.altText} />
                <div className="eventInfo">
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventShowcase;
