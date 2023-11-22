import React, { useState } from "react";
import "../../../css/navbar/navbar.css";

function Narbar() {
  const [isNavOpen, setNavOpen] = useState(false);
  const showNavMenu = () => setNavOpen(!isNavOpen);

  return (
    <navbar className="navbar">
      <div className="padding-vertical">
        <div className="navbar-inside page-padding">
          <div className="navbar-banner">KAMIN.</div>
          <nav className="navbar-menu">
            <ul>
              <li>About</li>
              <li>Skill</li>
              <li>Work</li>
              <li>Contect</li>
            </ul>
            <div className="navbar-dropdown">
              <button onClick={showNavMenu} className="btn-navbar">
                {isNavOpen && isNavOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
              </button>
              <div></div>
            </div>
          </nav>
        </div>
        </div>
        {isNavOpen && (
          <div className="navbar-dropdown  navbar-menu-inside">
            <ul>
              <li>About</li>
              <li>Skill</li>
              <li>Work</li>
              <li>Contect</li>
            </ul>
          </div>
        )}
      
    </navbar>
  );
}

export default Narbar;
