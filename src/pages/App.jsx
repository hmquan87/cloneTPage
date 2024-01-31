// App.js
import React from "react";
import "../css/App.css";
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Header from "./header";


function App() {
  return (
    <div className="full">
      <Header/>
      <div className="botton">
        <div className="scrollable-container">
          <Page1/>
          <Page2/>
          <Page3/>
        </div>
      </div>
    </div>
  );
}

export default App;