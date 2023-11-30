import React from "react";
import "../../css/content/about.css";

import Eyeball from "../EyeballComponent";
import imgKamin from "../../img/kamin1.jpg";
import SocialLinks from "../SocialLinks";

function About({ callRef }) {
  return (
    <>
      <div className="padding-huge">
        <div className="home-hero-about">
          <div className="about-item">
            <article>
              <div>
                <h1>Web developer & UX/UI designer</h1>
                <p>
                  Passionate about crafting extraordinary and unforgettable
                  digital experiences, I'm poised to bring your ideas and
                  aspirations to life in the digital realm.
                </p>
                <div className="about-contact">
                  <Eyeball name={""} />
                  <SocialLinks />
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
            With a passion to be a part of the design and web development world,
            even without experience, we are ready to bring creative ideas to
            every project. We have the ability to collaborate with startups and
            renowned brands, ready to create compelling and interesting works.
          </p>
          <div className="about-subtitle-section">
            <p>
              With a passion for entering the realm of web design and
              development, I am ready to contribute to creativity in every
              project.
            </p>
            <p>
              I'm poised to bring your ideas and aspirations to life in the
              digital realm.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}

export default About;
