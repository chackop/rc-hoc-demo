import React from 'react';
import './App.css';
import WrappedComponent from "./demoWrap";
import WrappedStorageComponent from "./wrapperStorage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WrappedComponent />
        {/* <WrappedStorageComponent reallyLongApiCall={reallyLongApiCall} /> */}
      </header>
    </div>
  );
}

export default App;
