import React, { useEffect } from "react";
import "../css/eyeball.css";

const EyeballComponent = ({ name }) => {
  const eyeball = (event) => {
    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
      let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
      let radian = Math.atan2(event.pageX - x, event.pageY - y);
      let rotation = radian * (180 / Math.PI) * -1 + 270;
      eye.style.transform = `rotate(${rotation}deg)`;
    });
  };

  useEffect(() => {
    document.body.addEventListener("mousemove", eyeball);

    return () => {
      document.body.removeEventListener("mousemove", eyeball);
    };
  }, []);

  return (
    <div className="eyeball-container">
      <div className="eye">{name}</div>
    </div>
  );
};

export default EyeballComponent;
