import React from "react";
import "./App.css";

import Narbar from "./components/layouts/narbar/Narbar.jsx";
import About from "./components/content/About.jsx";
import Skill from "./components/content/Skill.jsx";
import Work from "./components/content/Work.jsx";
import Contect from "./components/content/Contect.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <div className="container-large">
          <Narbar />
          <div className="page-padding">
            <About />
            <Skill />
            <Work />
          </div>
        </div>
        <Contect />
      </div>
      <Footer />
    </>
  );
}

export default App;
