import React from 'react';
import './App.css';
import WrappedComponent from "./demoWrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WrappedComponent />
      </header>
    </div>
  );
}

export default App;
