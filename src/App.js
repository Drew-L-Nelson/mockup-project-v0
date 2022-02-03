import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './components/HomePage';
import ContactMePage from './components/ContactMePage';
import AboutMePage from './components/AboutMePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path='/About'>
            <AboutMePage />
          </Route>
          <Route exact path='/Contact'>
            <ContactMePage />
          </Route>
          <Route exact path='/'>
            <HomePage />
          </Route>
        </Router>
      </header>
    </div>
  );
}

export default App;