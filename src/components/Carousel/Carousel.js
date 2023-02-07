import React from "react";
import './Carousel.scss';
import applicationdevimg from "../../images/application-development-image.webp";

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="app-dev">
                <div className="app-dev-image">
                    <img src={applicationdevimg} alt="applicationdevimg" />
                </div>
                <div className="app-dev-cnt">
                    <div className="app-dev-cnt-heading">
                        APPLICATION DEVELOPMENT
                    </div>
                    <div className="app-dev-cnt-description">
                        APPLICATION DEVELOPMENT
                    </div>
                    <div className="app-dev-cnt-points">
                        <div className="app-dev-cnt-points">
                            APPLICATION DEVELOPMENT
                        </div>
                        <div className="app-dev-cnt-points">
                            APPLICATION DEVELOPMENT
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-dev">
                <div className="app-dev-image">
                    <img src={applicationdevimg} alt="applicationdevimg" />
                </div>
                <div className="app-dev-cnt">
                    <div className="app-dev-cnt-heading">
                        APPLICATION DEVELOPMENT
                    </div>
                    <div className="app-dev-cnt-description">
                        APPLICATION DEVELOPMENT
                    </div>
                    <div className="app-dev-cnt-points">
                        <div className="app-dev-cnt-points">
                            APPLICATION DEVELOPMENT
                        </div>
                        <div className="app-dev-cnt-points">
                            APPLICATION DEVELOPMENT
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-dev">
                <div className="app-dev-image">
                    <img src={applicationdevimg} alt="applicationdevimg" />
                </div>
                <div className="app-dev-cnt">
                    <div className="app-dev-cnt-heading">
                        APPLICATION DEVELOPMENT
                    </div>
                    <div className="app-dev-cnt-description">
                        APPLICATION DEVELOPMENT
                    </div>
                    <div className="app-dev-cnt-points">
                        <div className="app-dev-cnt-points">
                            APPLICATION DEVELOPMENT
                        </div>
                        <div className="app-dev-cnt-points">
                            APPLICATION DEVELOPMENT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
