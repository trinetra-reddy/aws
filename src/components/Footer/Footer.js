import React from "react";
import "./Footer.scss";
import locationicon from "../../images/icon-region-org.png";
import phoneicon from "../../images/icon-phone-org.png";
import envelopeicon from "../../images/icon-envelope-org.png";
import facebook from "../../images/icon-facebook-fff.png";
import twitter from "../../images/icon-twitter-fff.png";
import linkedin from "../../images/icon-linkedin-fff.png";
import arrowup from "../../images/icon-chevron-up-fff.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-col1">
        <h4 className="footer-col-head">Anantha Web Solutions</h4>
        <li className="footer-li">1211, Tower B,Alamur,Ananthapur(DT),Andhra Pradesh-515002</li>
      </div>
      <div className="footer-col2">
        <h4 className="footer-col-head">Know More</h4>
        <li className="footer-li">About Us</li>
        <li className="footer-li">Contact Us</li>
      </div>
      <div className="footer-col3">
        <h4 className="footer-col-head">Check Out</h4>
        <li className="footer-li">Resources</li>
        <li className="footer-li">Careers</li>
      </div>
      <div className="footer-col4">
        <h4 className="footer-col-head">Contact Us</h4>
        <li className="footer-li">India: +91-1204-226-757</li>
        <li className="footer-li">ananthawebsolutions@gmail.com</li>
      </div>
      </div>
  );
};

export default Footer;
