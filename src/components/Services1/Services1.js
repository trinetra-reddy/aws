import React from "react";
import applicationdevimg from "../../images/application-development-image.webp";
import "./Services1.scss";
const Services1 = (props) => {
  return (
    <>
      <div className={`services-main ${props.imgPosition}`}>
        <div className={`services-wrapper1 ${props.imgPosition}`}>
          <img className="services-image" src={props.img} alt="applicationdevimg" />
        </div>
        <div className="services-wrapper2">
          <div className="service-head">{props.name}</div>
          <div className="serives-text">{props.text}
          </div>
          <div className="services-wrapper-container">
          <div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={props.checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">{props.li1}</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={props.checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">{props.li2}</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={props.checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">{props.li3}</li>
            </div>
            </div>
            <div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={props.checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">{props.li4}</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={props.checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">{props.li5}</li>
            </div>
            <div className="services-wrapper2-pts">
              <img className="services-wrapper2-img"src={props.checkmark} alt="checkmarks"/>
              <li className="services-wrapper2-li">{props.li6}</li>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services1;
