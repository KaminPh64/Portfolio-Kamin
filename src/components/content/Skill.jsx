import React from "react";
import "../../css/content/skill.css";

import * as FaIcons from "react-icons/fa";

function Skill({ callRef }) {
  return (
    <>
      <div className="padding-huge">
        <h2 className="header" ref={callRef}>
          Skills
        </h2>
        <div className="skill-grid">
          <div className="skill-item">
            <div className="skill-item-icon-circle">
              <FaIcons.FaReact size={30} />
            </div>
            <div className="">
              <b>01</b>
              <h3 className="skill-item-title">React JS</h3>
              <p className="skill-item-subtitle">
                I can create dynamic and responsive web applications, utilizing
                React's component-based architecture to enhance the user
                experience.
              </p>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-item-icon-circle">
              <FaIcons.FaNode size={40} />
            </div>
            <div className="">
              <b>02</b>
              <h3 className="skill-item-title">Node JS</h3>
              <p className="skill-item-subtitle">
                I can creating RESTful APIs, I can work with frameworks like
                Express to streamline the development process.
              </p>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-item-icon-circle">
              <FaIcons.FaFigma size={30} />
            </div>
            <div className="">
              <b>03</b>
              <h3 className="skill-item-title">Figma</h3>
              <p className="skill-item-subtitle">
                I am skilled in designing and prototyping, ensuring a smooth
                transition from concept to implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
