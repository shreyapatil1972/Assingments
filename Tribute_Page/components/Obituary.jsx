import React from "react";
import "./Obituary.css";
import { Link } from "react-router-dom";

const Obituary = () => {
  return (
    <div className="obituary-container">
      <div className="obituary-card">
        <img
          src="https://hollandsociety.org/wp-content/uploads/2024/02/theodore-roosevelt-1919.jpg"
          alt="Person"
          className="obituary-image"
        />

       
        <h1 className="obituary-name">Theodore Roosevelt</h1>
        <p className="obituary-dates">October 27, 1858 – January 6, 1919</p>

       
        <p className="obituary-message">
          "A life spent in service, dedication, and leadership. He left an
          indelible mark on the world, inspiring generations to come."
        </p>
        <div className="obituary-biography">
          <h2>Biography</h2>
          <p>
            Theodore Roosevelt was the 26th President of the United States, a
            statesman, conservationist, naturalist, and writer. His dedication
            to progressive reforms, national parks, and diplomacy shaped the
            modern nation.
          </p>
        </div>
        <div className="obituary-memorial">
          <h2>Memorial Service</h2>
          <p>📅 Date: January 10, 1919</p>
          <p>📍 Location: Oyster Bay, New York</p>
          <p>🕊️ "May his soul rest in peace."</p>
        </div>
        <Link to="/" className="btn">Back to Tribute Page</Link>
      </div>
    </div>
  );
};

export default Obituary;
