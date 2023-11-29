import React from "react";
import "../../css/content/skill.css";

import * as FaIcons from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

function Skill({ callRef }) {
  return (
    <>
      <div className="padding-huge">
        <h2 className="header" ref={callRef}>Skills</h2>
        <div className="skill-grid">
          <div className="skill-item">
            <div className="skill-item-icon-circle">
              <FaIcons.FaReact size={30} />
            </div>
            <div className="">
              <b>01</b>
              <h3 className="skill-item-title">React JS</h3>
              <p className="skill-item-subtitle">
                Unveil your brand's essence through a meticulous blend of
                imagery, messaging, and strategy. Crafting identities that
                resonate and endure.
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
                Unveil your brand's essence through a meticulous blend of
                imagery, messaging, and strategy. Crafting identities that
                resonate and endure.
              </p>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-item-icon-circle">
              <SiTypescript size={30} />
            </div>
            <div className="">
              <b>03</b>
              <h3 className="skill-item-title">TypeScript</h3>
              <p className="skill-item-subtitle">
                Unveil your brand's essence through a meticulous blend of
                imagery, messaging, and strategy. Crafting identities that
                resonate and endure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
