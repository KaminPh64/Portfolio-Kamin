import React from "react";
import "../../css/content/work.css";

import imgKamin from "../../img/kamin4.jpg";

function Work() {
  return (
    <>
      <div className="padding-medium">
        <h2 className="header">Work</h2>

        <div className="work-main">
          <div className="work-main-image">
            <img src={imgKamin} alt="WorkImage" />
          </div>

          <div className="work-grid-main">
            <div className="work-item-main">
              <h3>Project Title</h3>
              <div className="work-item-tags-wrap">
                <div className="work-item-tag">design</div>
                <div className="work-item-tag">development</div>
              </div>
            </div>
            <div className="work-item-main">
              <p>
                Transforming concepts into a dynamic reality, this project
                encompasses branding, UI design, and development. The outcome is
                an engaging digital platform that resonates with the brand's
                identity and amplifies user interaction.
              </p>
            </div>
          </div>
        </div>

        <div className="work-grid">
          <div className="work-item">
            <div className="work-item-image">
              <img src={imgKamin} alt="WorkImage" />
            </div>
            <div className="work-itme-detail">
              <h3>Project Title</h3>
              <div className="work-item-tags-wrap">
                <div className="work-item-tag">design</div>
                <div className="work-item-tag">development</div>
              </div>
              <p>
                Transforming concepts into a dynamic reality, this project
                encompasses branding, UI design, and development. The outcome is
                an engaging digital platform that resonates with the brand's
                identity and amplifies user interaction.
              </p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-item-image">
              <img src={imgKamin} alt="WorkImage" />
            </div>
            <div className="work-itme-detail">
              <h3>Project Title</h3>
              <div className="work-item-tags-wrap">
                <div className="work-item-tag">design</div>
                <div className="work-item-tag">development</div>
              </div>
              <p>
                Transforming concepts into a dynamic reality, this project
                encompasses branding, UI design, and development. The outcome is
                an engaging digital platform that resonates with the brand's
                identity and amplifies user interaction.
              </p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-item-image">
              <img src={imgKamin} alt="WorkImage" />
            </div>
            <div className="work-itme-detail">
              <h3>Project Title</h3>
              <div className="work-item-tags-wrap">
                <div className="work-item-tag">design</div>
                <div className="work-item-tag">development</div>
              </div>
              <p>
                Transforming concepts into a dynamic reality, this project
                encompasses branding, UI design, and development. The outcome is
                an engaging digital platform that resonates with the brand's
                identity and amplifies user interaction.
              </p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-item-image">
              <img src={imgKamin} alt="WorkImage" />
            </div>
            <div className="work-itme-detail">
              <h3>Project Title</h3>
              <div className="work-item-tags-wrap">
                <div className="work-item-tag">design</div>
                <div className="work-item-tag">development</div>
              </div>
              <p>
                Transforming concepts into a dynamic reality, this project
                encompasses branding, UI design, and development. The outcome is
                an engaging digital platform that resonates with the brand's
                identity and amplifies user interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
