import React from "react";
import "./FamilyTree.css";
import familyTreeImage from "../assets/familyTreeImage.webp"; // Adjust the path as needed
import { Link } from "react-router-dom";

const FamilyTree = () => {
  return (
    <div className="family-tree-container">
      <h1>Family Tree</h1>

      <div className="tree-image">
        <img src={familyTreeImage} alt="Family Tree" />
      </div>
      <Link to="/" className="btn">Back to Tribute Page</Link>
    </div>
  );
};

export default FamilyTree;
