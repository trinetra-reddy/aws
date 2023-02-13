import React from "react";
import './Carousel.scss';
import applicationdevimg from "../../images/application-development-image.webp";
import customerexpimg from "../../images/customer-experience-image.webp";
import digitalcommerceimg from "../../images/digital-Commerce-image.webp";
import checkmark from "../../images/icon-checkmark-org.png";

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="app-dev">
                <div className="app-dev-image">
                    <img src={applicationdevimg} alt="applicationdevimg" />
                </div>
                <div className="app-dev-content">
                    <div className="app-dev-content-heading">
                        Application Development
                    </div>
                    <div className="app-dev-content-description">
                        Gathering & analyzing requirements, designing prototypes, testing, seamless implementation,
                        and integration is what we are proficient with. We have expertise and domain experience across
                        key industry verticals including marketing, e-commerce, and quality assured practices across a
                        variety of technology frameworks such as Oracle ATG Web Commerce,
                        Adobe Experience Manager helps to support and extend the quality practices of end-customers.
                    </div>
                    <div className="app-dev-content-points">
                        <div className="app-dev-content-points-1">
                            <li><img src={checkmark} alt="checkmark" />Custom Application Development</li>
                            <li><img src={checkmark} alt="checkmark" />Low-code Application Development</li>
                            <li><img src={checkmark} alt="checkmark" />Database Application Development</li>
                        </div>
                        <div className="app-dev-content-points-2">
                            <li><img src={checkmark} alt="checkmark" />Rapid Application Development</li>
                            <li><img src={checkmark} alt="checkmark" />Mobile Application Development</li>
                            <li><img src={checkmark} alt="checkmark" />Enterprise Application Development</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-exp">
                <div className="customer-exp-image">
                    <img src={customerexpimg} alt="customerexpimg" />
                </div>
                <div className="customer-exp-content">
                    <div className="customer-exp-content-heading">
                        Customer Experience
                    </div>
                    <div className="customer-exp-content-description">
                        User experience and digital customer experience are the crucial and foremost
                        important part for any business because customers are the most precious assets of any business
                        and their experience must be seamless for effective branding of any business
                    </div>
                    <div className="customer-exp-content-points">
                        <div className="customer-exp-content-points-1">
                            <li><img src={checkmark} alt="checkmark" />Customer service</li>
                            <li><img src={checkmark} alt="checkmark" />Drive customer loyality</li>
                            <li><img src={checkmark} alt="checkmark" />Retention and account management</li>
                        </div>
                        <div className="customer-exp-content-points-2">
                            <li><img src={checkmark} alt="checkmark" />Technical support</li>
                            <li><img src={checkmark} alt="checkmark" />Personalised at scale</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="digital-com">
                <div className="digital-com-image">
                    <img src={digitalcommerceimg} alt="digitalcommerceimg" />
                </div>
                <div className="digital-com-content">
                    <div className="digital-com-content-heading">
                        Digital Commerce
                    </div>
                    <div className="digital-com-content-description">
                        With higher than ever number of engagements of businesses online now  whether new or existing-commerce
                        has to be flexible and adaptable for recent market trends and frameworks.
                    </div>
                    <div className="digital-com-content-points">
                        <div className="digital-com-content-points-1">
                            <li><img src={checkmark} alt="checkmark" />Direct  Digital Commerce  Enablement</li>
                            <li><img src={checkmark} alt="checkmark" />Optimise performance to maximise sales</li>
                            <li><img src={checkmark} alt="checkmark" />Omni-Channel Commerce Optimisation</li>
                        </div>
                        <div className="digital-com-content-points-2">
                            <li><img src={checkmark} alt="checkmark" />Omni-Channel Commerce Optimisation</li>
                            <li><img src={checkmark} alt="checkmark" />Sales growth and channel effectiveness</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
