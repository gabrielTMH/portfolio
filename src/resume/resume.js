import React from 'react';
import '../style.css'; // Assume style.css is the converted CSS from the given styles
import Contact from './Contact';
import Publications from './Publications';
import Summary from './Summary';
import Experience from './ProfessionalExperience';
import Skills from './Skills';
import Education from './Education';

function Resume() {
    return (
        <div className="container mt-5">
            <Contact />
            <Publications />
            <Summary />
            <Experience />
            <Skills />
            <Education />
        </div>
    );
}

export default Resume;
