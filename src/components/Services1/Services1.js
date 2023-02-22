import React from "react";
import applicationdevimg from "../../images/application-development-image.webp";
import "./Services1.scss";
const Services1 = () => {
  return (
    <>
      <div className="services-main">
        <div className="services-wrapper1">
          <img className="services-image" src={applicationdevimg} alt="applicationdevimg" />
        </div>
        <div className="services-wrapper2">
          <h2 className="service-head">Application Development</h2>
          <div>
            Gathering & analyzing requirements, designing prototypes, testing,
            seamless implementation, and integration is what we are proficient
            with. We have expertise and domain experience across key industry
            verticals including marketing, e-commerce, and quality assured
            practices across a variety of technology frameworks such as Oracle
            ATG Web Commerce, Adobe Experience Manager helps to support and
            extend the quality practices of end-customers
          </div>
        </div>
      </div>
    </>
  );
};
export default Services1;
