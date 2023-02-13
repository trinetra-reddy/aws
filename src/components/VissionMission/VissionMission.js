import React from "react";
import "./VissionMission.scss";
import image from "../../images/vissionmission.webp";
const VissionMission = () => {
  return (
    <>
      <div className="VissionMission-main">
        <div className="VissionMission-text">
          <div className="VissionMission-text1">
            <h1 className="VissionMission-text-header">Our Mission</h1>
            <p className="VissionMission-text-content">
              We are on a never ending journey for providing best tech solutions
              to our clients, offering them best suited solutions for their
              enterprise and making their plans and visions become concrete,
              giving them solutions for increased chances and opportunities for
              reaching heights which seemed unprecedented
            </p>
          </div>
          <div className="VissionMission-text2">
            <h1 className="VissionMission-text-header">Our Vision</h1>
            <p className="VissionMission-text-content">
              We strongly believe DCX is the future, we go in deep subject
              knowledge for strategy,customer understanding, design,
              governance,culture and with that image we are one of the leading
              IT service provider. We conduct every possible experiment in order
              to become Customer Experience service experts.
            </p>
          </div>
        </div>
        <div className="VissionMission-img">
          <img className="VissionMission-image" src={image} alt="Image"></img>
        </div>
      </div>
    </>
  );
};
export default VissionMission;
