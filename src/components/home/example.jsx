import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import '../../styles/example.scss';

import event1 from '../../assets/images/showcasenegus1.png';
import event2 from '../../assets/images/showcaserol1.png';
import event3 from '../../assets/images/showcasesafari1.png';

import safariEvent from '../../assets/images/gorilla11.png';
import safariEventOnCar from '../../assets/images/gorilla8.png';

import maltaGroupEvent from '../../assets/images/gorilla26.jpg';
import cocacolaEvent from '../../assets/images/gorilla3.png';

const cards = [
  {
    url: safariEvent,
    title: "We did a PR event for our client safaricom at 5 major towns in Ethiopia in the presence of high gov't officials and medias",
    id: 1,
  },
  {
    url: safariEventOnCar,
    title: "We have recruited and deployed 150 BA for door to door Sim card sells for Safaricom Ethio- pia to uplift 14k sells volume or Gross Add",
    id: 2,
  },
  // {
  //   url: event3,
  //   title: "We have managed a Mystery consumers activation for BGI in Addis Ababa at 40 outlets",
  //   id: 3,
  // },
  {
    url: maltaGroupEvent,
    title: "We conducted Negus Malt activation in Addis Ababa during x-mass holiday and March Womens Month campagin",
    id: 4,
  },
  {
    url: event2,
    title: "We did volume uplifiting camapgin for Roll deteregent and sold out 10k five kg pack of roll and poster placement and map (Penetration) to 12,960 outlets",
    id: 5,
  },
  {
    url: cocacolaEvent,
    title: "We did Billion Reason To Believe /BRTB campaign funded by the CocaCola company and we conduct the actual campaign at  the ground level with Cactus Plc",
    id: 6,
  },
  {
    url: event3,
    title: "We conduct a beauty salon and instore activation at Mekele, Adigrat, Shire, Debre Markos, Bahir dar, Addis Ababa, shashemene, Gondor for the product of Miracle, Crown and Samira hair oil",
    id: 7,
  },
];

const Example = () => {
  return (
    <div className="example-container">
      {/* <div className="scroll-indicator">
        <span className="scroll-text">
          Scroll down
        </span>
      </div> */}
      {/* <div className="backgroundTextWrapper">
        <div className="backgroundTitle">
          <div className="subtitle">Event Showcase</div>
          <p className="description">Explore our vibrant past events and successful campaigns.</p>
        </div>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="scroll-indicator">
        <span className="scroll-text">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="carousel-container">
        <motion.div style={{ x }} className="carousel-motion">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="card"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="card-image"
      ></div>
      <div className="card-content">
        <p className="card-title">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

