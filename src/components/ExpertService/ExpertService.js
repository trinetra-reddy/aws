import React from "react";
import "./ExpertService.scss";
import { Link } from "react-router-dom";
const ExpertService = () => {
  return (
    <>
      <div className="Expert-service-main">
        <div className="Expert-service-header">
          <h4>Know About Company</h4>
          <h1>Experts At Service</h1>
        </div>
        <div className="Expert-service-description">
          <p className="Expert-service-desc1">
            At Alt Digital Technologies we are streamlined with new technologies
            and work on the power of creativity to innovate in a way that
            benefits our client the most. We're focused on working on the
            product search, research, analyzing and exploratory study of the
            subject hence, furnishing our clients with a fine, predictable and
            consistent brand experience.
          </p>
          <p className="Expert-service-desc2">
            At Alt Digital Technologies, experiences can be diverse, unlimited
            and far-reaching. Joining Alt Digital Technology is about joining a
            culture of openness, collaboration, trust, and expectation to have a
            voice.
          </p>
        </div>
        <div className="Expert-service-button">
          <Link to="/about-us">
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ExpertService;
