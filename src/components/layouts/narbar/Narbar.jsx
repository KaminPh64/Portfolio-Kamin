import React, { useRef, useState } from "react";
import "../../../css/layout/navbar.css";

function Narbar({ callaboutRef, callskillRef, callworkRef, callcontectRef }) {
  const navRef = useRef();
  const [isNavOpen, setNavOpen] = useState(false);

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
    setNavOpen(!isNavOpen);
  };

  return (
    <navbar className="">
      <div className="padding-vertical navbar">
        <div className="navbar-inside page-padding">
          <div className="navbar-banner">KAMIN.</div>
          <nav className="navbar-menu">
            <ul>
              <li onClick={callaboutRef}>About</li>
              <li onClick={callskillRef}>Skill</li>
              <li onClick={callworkRef}>Work</li>
              <li onClick={callcontectRef}>Contect</li>
            </ul>
            <div className="navbar-dropdown">
              <button onClick={showNav} className="btn-navbar">
                {isNavOpen && isNavOpen ? (
                  <i className="bi bi-x"></i>
                ) : (
                  <i className="bi bi-list"></i>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>
      <nav ref={navRef} className="navbar-dropdown navbar-menu-inside ">
        <ul>
          <li onClick={callaboutRef}>About</li>
          <li onClick={callskillRef}>Skill</li>
          <li onClick={callworkRef}>Work</li>
          <li onClick={callcontectRef}>Contect</li>
        </ul>
      </nav>
    </navbar>
  );
}

export default Narbar;
