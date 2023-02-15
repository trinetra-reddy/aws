import React from "react";
import './Footer.scss';
import locationicon from "../../images/icon-region-org.png";
import phoneicon from "../../images/icon-phone-org.png";
import envelopeicon from "../../images/icon-envelope-org.png";
import facebook from "../../images/icon-facebook-fff.png";
import twitter from "../../images/icon-twitter-fff.png";
import linkedin from "../../images/icon-linkedin-fff.png";
import arrowup from "../../images/icon-chevron-up-fff.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-cnt">
                    <div className="footer-cnt-col-1">
                        <div className="footer-cnt-col-1-heading">
                            ANANTHA WEB SOLUTIONS
                        </div>
                        <div className="footer-cnt-col-1-descr">
                            <div className="footer-cnt-col-1-descr-icon">
                                <img src={locationicon} alt="locationicon" />
                            </div>
                            <div className="footer-cnt-col-1-descr-text">
                                xxxxxx, xxxxx street, Alamur, Ananthapur, AP, 515002.
                            </div>
                        </div>
                    </div>
                    <div className="footer-cnt-col-2">
                        <div className="footer-cnt-col-2-heading">
                            Know More
                        </div>
                        <div className="footer-cnt-col-2-ctus">
                            Contact us
                        </div>
                        <div className="footer-cnt-col-2-abtus">
                            About us
                        </div>
                    </div>
                    <div className="footer-cnt-col-3">
                        <div className="footer-cnt-col-3-heading">
                            Check Out
                        </div>
                        <div className="footer-cnt-col-3-resources">
                            Resources
                        </div>
                        <div className="footer-cnt-col-3-carrers">
                            Carrers
                        </div>
                    </div>
                    <div className="footer-cnt-col-4">
                        <div className="footer-cnt-col-4-heading">
                            Contact Us
                        </div>
                        <div className="footer-cnt-col-4-phone">
                            <div className="footer-cnt-col-4-phone-icon">
                                <img src={phoneicon} alt="phoneicon" />
                            </div>
                            <div className="footer-cnt-col-4-phone-number">
                                +91 XXXXX XXXXX
                            </div>
                        </div>
                        <div className="footer-cnt-col-4-mail">
                            <div className="footer-cnt-col-4-mail-icon">
                                <img src={envelopeicon} alt="envelopeicon" />
                            </div>
                            <div className="footer-cnt-col-4-mail-text">
                                accounts@anathawebsolutions.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-cnt2">
                    <div className="footer-cnt2-col1">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />
                    </div>
                    <div className="footer-cnt2-col2">
                        <div className="all-rights">
                            © 2023 All rights reserved by ANANTHA WED SOLUTIONS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;