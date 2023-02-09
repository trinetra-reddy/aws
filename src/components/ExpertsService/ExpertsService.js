import React from "react";
import './ExpertsService.scss';
import expertservicebg from "../../images/expertsservice-bg.jpg";

const ExpertsService = () => {
    return (
        <div className="experts">
            <img src={expertservicebg} alt="expertservicebg" className="expertservicebg" />
            <div className="experts-cnt">
                <div className="experts-cnt-heading-1">Know About Company</div>
                <div className="experts-cnt-heading-2">Experts At Service</div>
                <div className="experts-cnt-descrp-1">At Alt Digital Technologies we are streamlined with new
                 technologies and work on the power of creativity to innovate in a way that benefits our client the most.
                  We're focused on working on the product search, research, analyzing and exploratory study of the subject hence,
                 furnishing our clients with a fine, predictable and consistent brand experience</div>
                <div className="experts-cnt-descrp-2"> Digital Technology is about joining a culture of openness,
                 collaboration, trust, and expectation to have a voice.</div>
                <div className="experts-cnt-btn"><a href="#" class="experts-button">Explore</a></div>
            </div>
            <div className="experts-2">
                <div className="experts-2-card">
                    <div className="experts-2-card-data">
                        <div className="experts-2-card-data-num">300+</div>
                        <div className="experts-2-card-data-text">years of Experience</div>
                    </div>
                    <div className="experts-2-card-data">
                        <div className="experts-2-card-data-num">50+</div>
                        <div className="experts-2-card-data-text">Employees</div>
                    </div>
                    <div className="experts-2-card-data">
                        <div className="experts-2-card-data-num">50+</div>
                        <div className="experts-2-card-data-text">Projects done</div>
                    </div>
                    <div className="experts-2-card-data">
                        <div className="experts-2-card-data-num">10+</div>
                        <div className="experts-2-card-data-text">Conutries Served</div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ExpertsService;
