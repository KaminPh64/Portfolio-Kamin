import React from "react";
import "../../css/content/about.css";

import Eyeball from "../EyeballComponent";
import imgKamin from "../../img/kamin1.jpg";

function About({ callRef }) {
  return (
    <>
      <div className="padding-huge">
        <div className="home-hero-about">
          <div className="about-item">
            <article>
              <div>
                <h1>Web designer & webflow developer</h1>
                <p>
                  Diving into the world of design, I've had the privilege of
                  working on diverse projects, each leaving a unique mark.
                </p>
                <div className="about-contact">
                  <Eyeball name={""} />
                  <div className="social-links-wrap">
                    <i className="bi bi-github"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-line"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter-x"></i>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="about-item">
            <section>
              <div className="home-hero-image">
                <img src={imgKamin} alt="author" />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="home-about-subtitle" ref={callRef}>
        <aside>
          <p className="text-size-large">
            With over 8 years of design experience, I bring a creative edge to
            every project I touch. My design journey has led me to collaborate
            with startups and renowned brands alike, where I've crafted visuals
            that tell compelling stories.
          </p>
          <div className="about-subtitle-section">
            <p>
              Diving into the world of design, I've had the privilege of working
              on diverse projects, each leaving a unique mark.
            </p>
            <p>
              My approach is driven by a commitment to capture the essence of
              each project, whether it's web design, branding, or print
              materials.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default About;
