import React from "react";
import "../../css/content/contect.css";
function Contect({ callRef }) {
  return (
    <>
      <div className="contect-component">
        <div className="padding-huge">
          <div className="contect-inside" ref={callRef}>
            <h3 className="heading-xlarge">Let’s work together</h3>
            <p>
              For business opportunities or questions about my work, feel free
              to contact me.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
