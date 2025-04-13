import React, { useState } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentFact, setCurrentFact] = useState('Hover or click to see a fun fact!');

  const funFacts = [
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Honey never spoils - archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
    "A group of flamingos is called a 'flamboyance'.",
    "The shortest war in history was between Britain and Zanzibar in 1896. Zanzibar surrendered after 38 minutes.",
    "The inventor of the Frisbee was turned into a Frisbee after he died.",
    "A jiffy is an actual unit of time - it's 1/100th of a second.",
    "The unicorn is the national animal of Scotland.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "A crocodile cannot stick its tongue out."
  ];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setCurrentFact(randomFact);
    }
  };

  return (
    <div className="card-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Profile" 
            className="profile-image"
          />
          <h2>Jane Doe</h2>
        </div>
        <div className="card-back">
          <p>{currentFact}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;