import React from "react";
import { FaLink } from "react-icons/fa";

import "../../css/content/work.css";

function WorkItemCrad({ workImg, link, title, arrayTag, subtitle }) {
  return (
    <div className="work-item">
      <div className="work-item-image">
        <img src={workImg} alt="WorkImage" />
      </div>
      <div className="work-itme-detail">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3>
            <FaLink size={27} />
            {title}
          </h3>
        </a>
        <div className="work-item-tags-wrap">
          {arrayTag.map((text, index) => (
            <div className="work-item-tag" key={index}>
              {text}
            </div>
          ))}
        </div>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default WorkItemCrad;
