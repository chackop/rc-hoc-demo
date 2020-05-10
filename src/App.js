import React from 'react';
import './App.css';
// import WrappedComponent from "./demoWrap";
// import WrappedStorageComponent from "./wrapperStorage";
// import reverseHOC from './withReverseHOCclass';
// import WrapperDatafetch from './WrapperDatafetch';
import WrapperDataFetchHook from './WrapperDataFetchHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <WrappedComponent /> */}
        {/* <WrappedStorageComponent reallyLongApiCall={reallyLongApiCall} /> */}
        {/* <WrapperDatafetch /> */}
        <WrapperDataFetchHook />
      </header>
    </div>
  );
}

export default App;
