import React, { useRef } from "react";
import "./App.css";

import Narbar from "./components/layouts/narbar/Narbar.jsx";
import About from "./components/content/About.jsx";
import Skill from "./components/content/Skill.jsx";
import Work from "./components/content/Work.jsx";
import Contect from "./components/content/Contect.jsx";
import Footer from "./components/layouts/footer/Footer.jsx";

function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const workRef = useRef(null);
  const contectRef = useRef(null);

  const aboutRefScroll = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const skillRefScroll = () => {
    skillRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const workRefScroll = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const contectRefScroll = () => {
    contectRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="container-large">
          <Narbar
            callaboutRef={aboutRefScroll}
            callskillRef={skillRefScroll}
            callworkRef={workRefScroll}
            callcontectRef={contectRefScroll}
          />
          <div className="page-padding">
            <About callRef={aboutRef} />
            <Skill callRef={skillRef} />
            <Work callRef={workRef} />
          </div>
        </div>
        <Contect callRef={contectRef} />
      </div>
      <Footer
        callaboutRef={aboutRefScroll}
        callskillRef={skillRefScroll}
        callworkRef={workRefScroll}
        callcontectRef={contectRefScroll}
      />
    </>
  );
}

export default App;
