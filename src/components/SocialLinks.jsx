import React from "react";
import "../css/social.css"

function SocialLinks() {
  return (
    <div className="social-links-wrap">
      <a
        href="https://github.com/KaminPh64"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-github"></i>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61553787673884"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-facebook"></i>
      </a>
      <a
        href="https://line.me/ti/p/vlb8cMuY2s"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-line"></i>
      </a>
      <a
        href="https://instagram.com/____mk_____._0?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-instagram"></i>
      </a>
      <a
        href="https://www.example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-twitter-x"></i>
      </a>
    </div>
  );
}

export default SocialLinks;
