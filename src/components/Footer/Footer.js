import React from "react";
import './Footer.scss';
import locationicon from "../../images/icon-region-org.png";
import callicon from "../../images/icon-phone-org.png";
import mailicon from "../../images/icon-envelope-org.png";
import facebookicon from "../../images/icon-facebook-fff.png";
import twittericon from "../../images/icon-twitter-fff.png";
import linkedinicon from "../../images/icon-linkedin-fff.png";
import searchicon from "../../images/icon_search.png";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-main">
                    <div className="footer-main1" id="footer-d">
                        <div className="footer1" >
                            <div className="footer-heading1" id="fheading">AWS</div>
                            <div className="footer-loc-call-mail">
                                <div className="footer-address">
                                    <img className="footer-icons1" src={locationicon} alt="icon_1" />
                                </div>
                                <div className="footer-address-content">
                                    # FF7, 2nd Floor, Paniraj Towers,
                                    Kamala Nagar, Near Varun Hospital Ananthapuramu,Andhra Pradesh 515001;
                                </div>

                            </div>
                        </div>


                        <div className="footer1">
                            <div className="footer-heading1">Know More</div>
                            <div className="footer-link-names">
                                <Link to="/" className="footer-link"><li id="footer-li">Home</li></Link>
                                <Link to="/about-us" className="footer-link"><li id="footer-li">About Us</li></Link>
                                <Link to="/contact-us" className="footer-link"><li id="footer-li">Contact Us</li></Link>
                            </div>

                        </div>
                    </div>
                    <div className="footer-main1">
                        <div className="footer1">
                            <div className="footer-heading1">Check Out</div>
                            <div className="footer-link-names">
                                <li id="footer-li"><Link className="footer-link">Services</Link></li>
                                <li id="footer-li"><Link className="footer-link">Resources</Link></li>
                                <li id="footer-li"><Link className="footer-link">Careers</Link></li>
                            </div>

                        </div>
                        <div className="footer1">
                            <div className="footer-heading1">
                                Contact Us
                            </div>
                            <div className="footer-loc-call-mail">
                                <div className="footer-call">
                                    <img className="footer-icons1" src={callicon} alt="call-icon"></img>
                                </div>
                                <div className="footer-call-mail-content">
                                    <a href="tel:+91 96666 22090" className="footer-call-mail-p">+91 96666 22090</a>
                                </div>
                            </div>
                            <div className="footer-loc-call-mail">
                                <div className="footer-call">
                                    <img className="footer-icons1" src={mailicon} alt="mail-icon"></img>
                                </div>
                                <div className="footer-call-mail-content">
                                    <a href="mailto:accounts@anathawebsolutions.com" className="footer-call-mail-p" id="footer-mail">accounts@ananthawebsolutions.com
                                    </a>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
                <div className="footer-main-2">
                    <div className="ff">
                        <div className="footer-icons-1">
                            <div className="ficon1">
                                <Link to="#"><img className="f-icons" src={facebookicon} alt="facebook icon"></img></Link>
                            </div>
                            <div className="ficon1">
                            <Link to="#"><img className="f-icons" src={twittericon} alt="Twitter icon"></img></Link>
                            </div>
                            <div className="ficon1">
                            <Link to="#"><img className="f-icons" src={linkedinicon} alt="LinkedIn icon"></img></Link>
                            </div>
                            <div className="ficon1">
                            <Link to="#"><img className="f-icons" src={searchicon} alt="search icon"></img></Link>
                            </div>
                        </div>
                        <div className="footer-copyrights">
                            <div className="footer-cr-content">
                                © 2023 | All Rights Reserved By <span className="f-cr-details">Aws.</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    );
};

export default Footer;

