import React from "react";
import "../../../css/layout/footer.css";
import SocialLinks from "../../SocialLinks";

function Footer({ callaboutRef, callskillRef, callworkRef, callcontectRef }) {
  return (
    <div className="footer-component ">
      <div className="page-padding">
        <div className="footer-inside">
          <div className="footer-top">
            <h3>KAMIN.</h3>
            <SocialLinks />
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
