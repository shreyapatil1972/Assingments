import React from "react";
import "./Page.css";
import { Link } from "react-router-dom";

const TributePage = () => {
  return (
    <div className="tribute-container">
      <div className="hero">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ajbwTb6GYpykKKVyesFyVrNWorRRxt8ufn83Zusmz-tXDOhdXt8IvtDHhCw1O2B2aEo&usqp=CAU"
          alt="Theodore Roosevelt"
          className="hero-image"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIB2SpugzJI3WSyWFxxGmTVDOHcCAGAdbmQ&s"
          alt="Profile"
          className="profile-img"
        />
      </div>

      <div className="name-section">
        <h1>Theodore Roosevelt</h1>
        <p>October 27, 1858 - January 6, 1919</p>
        <p>New York City, USA</p>
      </div>

      <div className="nav-tabs">
        <Link to='/obituary'>Obituary</Link>
        <Link to='/timeline'>Timeline</Link>
        <Link to='/gallery' className="btn">View Gallery</Link>
        
        <Link to='/family-tree'>Family Tree</Link>
        
      </div>

      <div className="tribute-message">
        <p>“Speak softly and carry a big stick; you will go far.”</p>
      </div>

      <div className="share-btn">
        <button>📤 Share</button>
      </div>
    </div>
  );
};

export default TributePage;
