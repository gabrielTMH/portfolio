import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './baselayout'; // Ensure the path is correct based on your file structure
import HomePage from './homepage'; // Adjust the import path as needed
import Resume from './resume/resume'; // Adjust the import path
import Portfolio from './portfolio/portfolio'; // Adjust the import path
import  ContactForm from './contact'
// Import other pages here

function App() {
  return (
    <Router>
      <BaseLayout>
        <Routes>
          <Route exact path='/'element={<HomePage/>} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/form' element={<ContactForm />} />
          {/* Define other routes here */}
          {/* Example: <Route path="/resume" component={ResumePage} /> */}
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
