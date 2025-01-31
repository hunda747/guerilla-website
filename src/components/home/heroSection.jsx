import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import '../../styles/heroSection.scss'; // Import the SCSS file

import logo from '../../assets/images/gorillalogo.png';

import image1 from '../../assets/images/gorilla1.png';
import image2 from '../../assets/images/gorilla2.png';
import image3 from '../../assets/images/gorilla13.png';
import image4 from '../../assets/images/gorilla26.jpg';
import image5 from '../../assets/images/gorilla18.png';
import image6 from '../../assets/images/gorilla6.png';
import image7 from '../../assets/images/gorilla7.png';
import image8 from '../../assets/images/gorilla8.png';
import image9 from '../../assets/images/gorilla9.png';
import image10 from '../../assets/images/gorilla28.jpg';
import image11 from '../../assets/images/gorilla11.png';
import image12 from '../../assets/images/gorilla12.png';
import image13 from '../../assets/images/gorilla29.jpg';
import image14 from '../../assets/images/gorilla27.jpg';
import image15 from '../../assets/images/gorilla15.png';
import image16 from '../../assets/images/gorilla16.png';
import CTA from "../cta";

const ShuffleHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        {/* <img src={logo} alt="Logo" className="logo-image" /> */}
        <h3>
          Guerilla
        </h3>
        <h3>
          Marketing
        </h3>
        <p>
          Transform Your Brand's Potential Through Immersive Marketing Experiences
        </p>
        <div className="hero-text__buttons">
          <CTA />
          {/* <button className="cta-button">
            Find a class
          </button> */}
        </div>
      </div>
      <div className="shuffle-grid-container">
        <ShuffleGrid />
      </div>
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: image1,
  },
  {
    id: 2,
    src: image2,
  },
  {
    id: 3,
    src: image3,
  },
  {
    id: 4,
    src: image4,
  },
  {
    id: 5,
    src: image5,
  },
  {
    id: 6,
    src: image6,
  },
  {
    id: 7,
    src: image7,
  },
  {
    id: 8,
    src: image8,
  },
  {
    id: 9,
    src: image9,
  },
  {
    id: 10,
    src: image10,
  },
  {
    id: 11,
    src: image11,
  },
  {
    id: 12,
    src: image12,
  },
  {
    id: 13,
    src: image13,
  },
  {
    id: 14,
    src: image14,
  },
  {
    id: 15,
    src: image15,
  },
  {
    id: 16,
    src: image16,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="shuffle-grid">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;