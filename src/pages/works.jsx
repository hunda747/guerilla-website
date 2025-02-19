import React, { useMemo } from 'react'
import '../styles/works.scss';

import { useState } from "react";
import { motion } from "framer-motion";

import image1 from '../assets/images/gorilla1.png';
import image2 from '../assets/images/gorilla2.png';
import image3 from '../assets/images/gorilla13.png';
import image4 from '../assets/images/gorilla6.png';
import image5 from '../assets/images/gorilla7.png';
import image6 from '../assets/images/gorilla9.png';
import image7 from '../assets/images/gorilla11.png';
import image8 from '../assets/images/gorilla12.png';
import image9 from '../assets/images/gorilla13.png';
import image10 from '../assets/images/gorilla14.png';
import rollDetergentEvent from '../assets/images/gorilla18.png';
import habeshaBreweryEvent from '../assets/images/gorilla27.jpg';
import dachiEvent from '../assets/images/gorilla16.png';
import anchorMilkEvent from '../assets/images/anchormilk.webp';
import bgievent from '../assets/images/bgi.webp';
import doubleA from '../assets/images/doubleA.webp';
import cocacolaEvent from '../assets/images/gorilla3.png';

import maltaGroupEvent from '../assets/images/gorilla26.jpg';

import Lists from '../components/works/lists';
import { Reveal } from '../components/reveal';
import { usePageTransition } from '../hooks/usePageTransition';
import Navbar from '../components/navbar';

const campaigns = [
  { id: 1, title: "Safaricom PR Event", category: "PR Events", image: image7, description: "A PR event in 5 major towns in Ethiopia with high gov't officials and media." },
  { id: 7, title: "Dachi Campaign", category: "Activations", image: dachiEvent, description: "Sold 10K five-kg packs and placed posters in 12,960 outlets." },
  { id: 2, title: "Kerry Group Research", category: "Market Research", image: image2, description: "Consumer tasting research on Sunchip blind taste with 26 participants." },
  { id: 3, title: "Coca-Cola Activation", category: "Activations", image: cocacolaEvent, description: "BRTB campaign with free sampling for 59,000 teens." },
  { id: 4, title: "Habesha Brewery Influencers", category: "Brand Activation", image: habeshaBreweryEvent, description: "200 youth influencers at 75 outlets during Adewa celebration." },
  // { id: 5, title: "Kenya Embassy PR Event", category: "PR Events", image: image5, description: "PR event during the IGAD Summit at the African Union." },
  { id: 6, title: "Roll Detergent Campaign", category: "Activations", image: rollDetergentEvent, description: "Sold 10K five-kg packs and placed posters in 12,960 outlets." },
  { id: 11, title: "BGI Mystery Consumers", category: "Activations", image: bgievent, description: "Mystery consumer activation in Addis Ababa at 40 outlets." },
  // { id: 8, title: "Triggerise Product Launch", category: "Activations", image: image8, description: "Open market activation for product launch." },
  { id: 9, title: "Double A Paper Activation", category: "Activations", image: doubleA, description: "Door-to-door activation in 5 towns." },
  { id: 10, title: "Anchor Milk Activation", category: "Activations", image: anchorMilkEvent, description: "New Year Bazaar activation with free samples." }
];

const categories = ["All", "PR Events", "Market Research", "Activations", "Brand Activation"];

const WorksContent = ({ selectedCategory, setSelectedCategory, filteredCampaigns }) => (
  <div className="containerPaddingBig">
    <div className="works-container">
      <h1 className="works-title">Our Campaigns</h1>
      <div className="works-header">
        <div className="category-buttons">
          <ul>
            {categories.map((cat) => (
              <motion.li
                key={cat}
                layout
                className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <motion.div
        className="campaigns-grid"
        layout
      >
        {filteredCampaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`campaign-wrapper ${index % 2 === 0 ? 'even' : 'odd'}`}
          >
            <Reveal width="100%">
              <div className="campaign-card">
                <img src={campaign.image} alt={campaign.title} className="campaign-image" />
                <div className="campaign-content">
                  <h2 className="campaign-title">{campaign.title}</h2>
                </div>
              </div>
            </Reveal>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = campaigns.filter(
    (c) =>
      (selectedCategory === "All" || c.category === selectedCategory) &&
      c.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <WorksContent
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredCampaigns={filteredCampaigns}
      />
    </>
  );
}

export default Works
