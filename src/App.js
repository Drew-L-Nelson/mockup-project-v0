import React from 'react';
import HomePage from './components/HomePage';
import Header from './components/Header';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mouckup Project v0</h1>
        <Header/>
        <HomePage />
        
      </header>
    </div>
  );
}

export default App;