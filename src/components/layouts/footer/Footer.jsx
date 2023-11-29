import React from "react";
import "../../../css/layout/footer.css";

function Footer({ callaboutRef, callskillRef, callworkRef, callcontectRef }) {
  return (
    <div className="footer-component ">
      <div className="page-padding">
        <div className="footer-inside">
          <div className="footer-top">
            <h3>KAMIN.</h3>
            <div className="social-links-wrap">
              <i className="bi bi-github"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-line"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
          </div>
          <div className="footer-bottom">
            <ul>
              <li onClick={callaboutRef}>About</li>
              <li onClick={callskillRef}>Skill</li>
              <li onClick={callworkRef}>Work</li>
              <li onClick={callcontectRef}>Contect</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
