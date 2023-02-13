import React from "react";
import './Banner.scss';
import bannerbg from "../../images/aws-banner-img.webp";

const Banner = () => {
    return (
        <div className="banner"> 
            <div className="banner-1">
                <div className="banner-1-image">
                    <img src={bannerbg} alt="bannerbg" />
                </div>
                <div className="banner-1-wrpr">
                    <div className="banner-1-wrpr-text-1">
                        Empoer your Business
                    </div>
                    <div className="banner-1-wrpr-text-2">
                        Excellent IT services for your success
                    </div>
                    <div className="banner-1-wrpr-button">
                       <a href="#" class="button">Explore</a>
                    </div>
                </div>
            </div>
            <div className="banner-2">
                <div className="banner-2-heading">
                    WHAT WE DO
                </div>
                <div className="banner-2-description">
                As part of our commitment to clients, we go beyond the typical
                 client relationship by investing more time in understanding their business needs today and tomorrow.
                </div>
            </div>
        </div>
    );
};

export default Banner;