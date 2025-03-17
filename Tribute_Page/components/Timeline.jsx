import React from "react";
import "./Timeline.css";
import { Link } from "react-router-dom";

const Timeline = () => {
  const events = [
    { year: "1858", description: "October 27 - Born at 28 East 20th Street, New York, NY to Theodore Sr. and Martha Bulloch Roosevelt." },
    { year: "1876-77", description: "September - Begins education at Harvard University July - Writes The Summer Birds of the Adirondacks" },
    { year: "1883", description: "September 8 - Arrives in the town of Little Missouri in Dakota Territory; hires Joe Ferris as hunting guide." },
    { year: "1892", description: "Goes on inspection tour of Indian Reservations, and hunts at the Elkhorn" },
    { year: "1901", description: "March to September - Serves as vice president September 6 - President McKinley shot while Roosevelt is hiking in the Adirondacks" },
    { year: "1919", description: "January 6 - Dies in sleep at Sagamore Hill of a coronary embolism (arterial blood clot), age 60" },
  ];

  return (
    <div className="timeline-container">
      <h1>Life Timeline</h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h2>{event.year}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="btn">Back to Tribute Page</Link>
    </div>
  );
};

export default Timeline;
