import React from 'react';
import './Skills.css'; // Add this line

function Skills() {
    return (
        <div className="skills-section">

        <h3 className="section-title">Skills</h3>
        <div className="skills-section">
          <div className="skills-container">
            <div className="skill-category">
              <h4>Languages</h4>
              <p>Java, C, C++, C#, VB, Python, HTML, CSS, PHP, JavaScript, X86, SQL, R, Haskell, Prolog, Ruby</p>
            </div>
            <div className="skill-category">
              <h4>Frameworks</h4>
              <p>Bootstrap, Node.js, JUnit, PyTorch, Flask, Django, .NET, LAMP</p>
            </div>
            <div className="skill-category">
              <h4>Libraries</h4>
              <p>React, JQuery, TensorFlow, Keras, Scikit-Learn, NLTK, Pandas, Gensim, SciPy, NumPy, SpaCy</p>
            </div>
            <div className="skill-category">
              <h4>Concepts</h4>
              <p>OOP, Data Structures, Algorithms, AI/ML, Cloud Computing</p>
            </div>
            <div className="skill-category">
              <h4>Tools</h4>
              <p>Git, GitHub, Jira, Oracle VM VirtualBox, IntelliJ, Atom, VSC, Slack, Trello, MySQL, Azure</p>
            </div>
            <div className="skill-category">
              <h4>Soft Skills</h4>
              <p>Adaptability, Collaboration, Attention to Detail, Lateral Thinking</p>
            </div>
          </div>
        </div>

        </div>
    );
}

export default Skills;
