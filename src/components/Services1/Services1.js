import React from "react";
import applicationdevimg from "../../images/application-development-image.webp";
import "./Services1.scss";
import checkmark from "../../images/icon-checkmark-org.png";
const Services1 = () => {
  return (
    <>
      <div className="services-main">
        <div className="services-wrapper1">
          <img className="services-image" src={applicationdevimg} alt="applicationdevimg" />
        </div>
        <div className="services-wrapper2">
          <div className="service-head">Application Development</div>
          <div className="serives-text">
            Gathering & analyzing requirements, designing prototypes, testing,
            seamless implementation, and integration is what we are proficient
            with. We have expertise and domain experience across key industry
            verticals including marketing, e-commerce, and quality assured
            practices across a variety of technology frameworks such as Oracle
            ATG Web Commerce, Adobe Experience Manager helps to support and
            extend the quality practices of end-customers.
          </div>
          <div className="services-wrapper-container">
          <div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">Custom Application Development</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">Low-Code Application Development</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">Database Application Development</li>
            </div>
            </div>
            <div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">Rapid Application Development</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">Mobile Application Development</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">Enterprise Application Development</li>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services1;
