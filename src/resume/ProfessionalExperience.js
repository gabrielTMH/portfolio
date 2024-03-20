import React from 'react';
import ExperienceItem from './expereinceItem';
import Experiences from './exp.js';

function Experience() {
  return (
    <div className="experience-section">
      <h3 className="section-title">Professional Experience</h3>
      {Experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          dates={experience.dates}
          location={experience.location}
          details={experience.details}
        />
      ))}
    </div>
  );
}

export default Experience;
