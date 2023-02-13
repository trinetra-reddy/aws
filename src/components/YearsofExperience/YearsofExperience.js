import React from "react";
import "./YearsofExperience.scss";
import yearsofexperienceimage from "../../images/Experienceimg.webp";
const YearsofExperience = () => {
  return (
    <>
      <div className="yearsofexperience-main">
        <div className="yearsofexperience-text">
          <div className="yearsofexperience-header-wrapper">
            <div className="yearsofexperience-count-wrapper">
              <h1 className="yearsofexperience-count">10</h1>
            </div>
            <div className="yearsofexperience-heading-wrapper">
              <h1 className="yearsofexperience-heading">
                Years of Experience in IT Solutions & Business
              </h1>
            </div>
          </div>
          <div className="yearsofexperience-content-wrapper"></div>
          <p className="yearsofexperience-content">
            Alt Digital Technologies experienced expertise and objectivity with
            the present digital commerce capability to assist programming
            business with developing. We’re focused on working on technology
            search. Furnishing our clients with a predictable and consistent
            brand experience is a given when competition is only a click away.
            We have faith that we convey quality IT answers to clients that will
            assist them with developing their business. With over 10+ years of
            experience serving companies to succeed by delivering the technology
            that focuses on customer engagement and is sales driven. As a
            Unified Commerce Platform Specialized Partner, we have developed an
            industry-leading in delivering the seamless Digital customer
            experience which brings unmatched functionality for B2C & B2B
            companies with requirements to implement any tech eCommerce solution
            which is fast promising, and cost-effective.
          </p>
        </div>
        <div className="yearsofexperience-img-wrapper">
          <img
            className="yearsofexperience-image"
            src={yearsofexperienceimage}
            alt="Years of experience Image"
          ></img>
        </div>
      </div>
    </>
  );
};
export default YearsofExperience;
