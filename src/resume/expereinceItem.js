import React from 'react';

function ExperienceItem({ title, dates, location, details }) {
  return (
    <div className="experience-item">
      <h4 className="experience-title">{title}</h4>
      <p className="experience-info">{dates} | {location}</p>
      <ul className="experience-details">
        {details.map((detail, index) => (
          <li key={index} className="experience-detail">{detail}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceItem;
