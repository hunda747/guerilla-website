import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/example.scss';

import event1 from '../../assets/images/showcasenegus1.png';
import event2 from '../../assets/images/showcaserol1.png';
import event3 from '../../assets/images/showcasesafari1.png';

import safariEvent from '../../assets/images/gorilla11.webp';
import safariEventOnCar from '../../assets/images/gorilla8.webp';
import eastAfricaTigersEvent from '../../assets/images/gorilla5.webp';

import maltaGroupEvent from '../../assets/images/gorilla26.jpg';
import cocacolaEvent from '../../assets/images/gorilla3.webp';
import LazyImage from "../common/LazyImage";

// Placeholder SVG for lazy loading
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' width='300' height='200'%3E%3Crect width='300' height='200' fill='%23cccccc'/%3E%3C/svg%3E";

const cards = [
  {
    url: safariEvent,
    title: "Safaricom PR Event",
    description: "We did a PR event for our client safaricom at 5 major towns in Ethiopia in the presence of high gov't officials and medias",
    id: 1,
  },
  {
    url: safariEventOnCar,
    title: "Safaricom Door-to-Door Campaign",
    description: "We have recruited and deployed 150 BA for door to door Sim card sells for Safaricom Ethiopia to uplift 14k sells volume or Gross Add",
    id: 2,
  },
  // {
  //   url: event3,
  //   title: "We have managed a Mystery consumers activation for BGI in Addis Ababa at 40 outlets",
  //   id: 3,
  // },
  {
    url: maltaGroupEvent,
    title: "Negus Malt Activation",
    description: "We conducted Negus Malt activation in Addis Ababa during x-mass holiday and March Womens Month campagin",
    id: 4,
  },
  {
    url: event2,
    title: "Roll Detergent Campaign",
    description: "We did volume uplifiting camapgin for Roll deteregent and sold out 10k five kg pack of roll and poster placement and map (Penetration) to 12,960 outlets",
    id: 5,
  },
  {
    url: cocacolaEvent,
    title: "Billion Reason To Believe /BRTB Campaign",
    description: "We did Billion Reason To Believe /BRTB campaign funded by the CocaCola company and we conduct the actual campaign at  the ground level with Cactus Plc",
    id: 6,
  },
  {
    url: eastAfricaTigersEvent,
    title: " East Africa Tigers Brand",
    description: "We conduct a Consumer Tent Activation for East Africa Tigers Brand Industries product, Miracle Hair food and Crown Detergent Powder at Eight regions of Ethiopia",
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

  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="carousel-container">
        <motion.div
          style={isMobile ? {} : { x }}
          className="carousel-motion"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

// LazyBackgroundImage component for background images
const LazyBackgroundImage = ({ src, children, className, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderImage);
  const ref = useRef(null);

  useEffect(() => {
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in the viewport
          if (entry.isIntersecting) {
            // Load the image
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setCurrentSrc(src);
              setIsLoaded(true);
              // Disconnect the observer once the image is loaded
              observer.disconnect();
            };
          }
        });
      },
      { rootMargin: '100px' }
    );

    // Observe the element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        backgroundImage: `url(${currentSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: 'opacity 0.3s ease-in-out',
        opacity: isLoaded ? 1 : 0.5,
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      key={card.id}
      className="card"
      onClick={() => navigate('/works')}
    >
      <LazyBackgroundImage
        src={card.url}
        className="card-image"
      />
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
      </div>
    </div>
  );
};

export default Example;

