import React, { useState } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";

const images = [
  "https://p8f5m7s7.rocketcdn.me/wp-content/uploads/2013/10/teddy_roosevelt.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOAotOq0weJN1zdNvKIfYklQlxQOdXpmUXA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUtKBgbixS_sAMKAyBJWVB1JpDRmHAwYpkg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRm8nKAwbT26QeiwiJ0qT4Dw9jm_MebIYJoA&s",
  "https://todayinsci.com/R/Roosevelt_Theodore/RooseveltTheodore-ExpeditionNotes500px.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-EWH2r6-GoSbyiEGYiShMfiLqiJgtH5WTA&s",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <h1>Photo Gallery</h1>
      
      <div className="image-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Theodore Roosevelt ${index + 1}`}
            className="gallery-image"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" className="lightbox-img" />
        </div>
      )}
      <Link to="/" className="btn">Back to Tribute Page</Link>
    </div>
  );
};

export default Gallery;
