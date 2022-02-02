import React from 'react';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mouckup Project v0</h1>
        <HomePage />
        <Footer />
      </header>
    </div>
  );
}

export default App;