import React from "react";
import "./Casestudies.scss";
const CaseStudiesCard = (props) => {
  return (
    <>
      <div className="casestudycard-main">
        <div className="casestudycard-image">
          <img src={props.image} alt=" "></img>
        </div>
        <div className="casestudycard-content">
          <div className="casestudycard-heading">
            <h2>{props.heading}</h2>
          </div>
          <div className="casestudycard-description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudiesCard;
