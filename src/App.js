import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseLayout from './BaseLayout'; // Ensure the path is correct based on your file structure
import HomePage from './HomePage'; // Adjust the import path as needed
// Import other pages here

function App() {
  return (
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* Define other routes here */}
          {/* Example: <Route path="/resume" component={ResumePage} /> */}
        </Switch>
      </BaseLayout>
    </Router>
  );
}

export default App;
