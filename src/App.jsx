import React from "react";
import "./App.css";

import Narbar from "./components/layouts/narbar/Narbar.jsx";
import About from "./components/content/About.jsx";
import Skill from "./components/content/Skill.jsx";
import Work from "./components/content/Work.jsx";

function App() {
  return (
    <div className="container-large">
      <Narbar />
      <div className="main-wrapper">
        <div className="page-padding">
          <About />
          <Skill />
          <Work />
        </div>
      </div>
    </div>
  );
}

export default App;
