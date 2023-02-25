import React from "react";
import "./Casestudies.scss";
import CaseStudiesCard from "./CaseStudiesCard";
import icondesigning from "../../images/icon-designing-org.png";
import icondevelopment from "../../images/icon-development-org.png";
import icondeployement from "../../images/icon-deployment-org.png";

const Casestudies = () => {
  return (
    <div className="casestudies-main">
      <div className="casestudies-heading">
        <h3>Process</h3>
        <h1>
          Software Development Approach
        </h1>
      </div>
      <div className="casestudies-sections">
        <CaseStudiesCard
          image={icondesigning}
          heading="Designing"
          description="Software design usually involves problem-solving and planning a software solution."
        />
        <CaseStudiesCard
          image={icondevelopment}
          heading="Development"
          description="Developing a design around solutions to the problems presented by requirements."
        />
        <CaseStudiesCard
          image={icondeployement}
          heading="Deployment"
          description="We are delivering complete solutions and resolving the user’s problem."
        />
      </div>
    </div>
  );
};

export default Casestudies;
