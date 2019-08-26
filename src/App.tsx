import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './Components/List';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Playing Around with TypeScript
        <List />
      </header>
    </div>
  );
}

export default App;
