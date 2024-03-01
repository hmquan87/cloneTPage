// App.js
import React from "react";
import "../style/css/App.css";
import Page from "./page";
import Header from "./header";



function App() {
  return (

    <div>
      <div className="full">
        <div className="headerapp">
          <Header />
          <div className="gr-btn">

          </div>
        </div>
        <div className="botton">
          <div className="scrollable-container">
            <Page />
            
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;