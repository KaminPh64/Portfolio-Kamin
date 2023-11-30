import React from "react";
import { FaLink } from "react-icons/fa";
import "../../css/content/work.css";

import MainWork from "../../img/FeePayment-WebApp.png";
import ThaiFood from "../../img/ThaiFood-Mockup.png";
import StayIn from "../../img/StayIn-Mockup.png";
import WorkItemCrad from "./WorkItemCrad";

function Work({ callRef }) {
  return (
    <>
      <div className="padding-medium">
        <h2 className="header" ref={callRef}>
          Work
        </h2>
        <div className="work-main">
          <div className="work-main-image">
            <img src={MainWork} alt="WorkImage" />
          </div>
          <div className="work-grid-main">
            <div className="work-item-main">
              <a
                href="http://104.248.150.137:5001/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>
                  <FaLink size={27} /> Fee Payment System
                </h3>
              </a>
              <div className="work-item-tags-wrap">
                <div className="work-item-tag">design</div>
                <div className="work-item-tag">development</div>
                <div className="work-item-tag">frontend</div>
              </div>
            </div>
            <div className="work-item-main">
              <p>
                Development of fee payment garbage and wastewater treatment
                systems case study sunpakwan local government chiang mai,
                Developed with React framework and Node.js.
              </p>
            </div>
          </div>
        </div>

        <div className="work-grid">
          <WorkItemCrad
            workImg={StayIn}
            link={
              "https://drive.google.com/file/d/1LUZnYyizPYDVGD2mgOzbB3AeEW5Blq4E/view?usp=sharing"
            }
            title={"StayIn.com"}
            arrayTag={["mockup", "ux/ui design"]}
            subtitle={`Hotel booking app mockup design embraces a personalized approach
            to enhance the stay experience. Users can explore hotels
            tailored to their preferences, filtering by amenities, location,
            and price range.`}
          />
          <WorkItemCrad
            workImg={ThaiFood}
            link={
              "https://drive.google.com/file/d/11CaQxvi3ZNi-fX3DJevOb5no7zNU0dSc/view?usp=sharing"
            }
            title={"80's ThaiFood"}
            arrayTag={["mockup", "ux/ui design"]}
            subtitle={`Restaurant booking app mockup design boasts an intuitive user
            interface, ensuring a seamless and user-friendly experience.
            Navigate effortlessly through the app with clear and visually
            appealing elements for a hassle-free reservation process.`}
          />
        </div>
      </div>
    </>
  );
}

export default Work;
