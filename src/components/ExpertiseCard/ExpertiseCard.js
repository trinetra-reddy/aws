import React from "react";
import "./ExpertiseCard.scss";
const ExpertiseCard = (props) => {
  return (
    <>
      <div className="Expertise-main">
        <div className="Expertise-numbers">
          {props.count}+
        </div>
        <div className="Expertise-description">{props.description}</div>
      </div>
    </>
  );
};
export default ExpertiseCard;
