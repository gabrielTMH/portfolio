import React from 'react';
import ProjectCard from './card'; // Adjust the import path as necessary
import projects from './projects'; // Adjust the import path to where your data file is located

function Portfolio() {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Portfolio;
