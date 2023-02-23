import React from "react";
import './Casestudies.scss';
import icondesigning from "../../images/icon-designing-org.png";
import icondevelopment from "../../images/icon-development-org.png";
import icondeployement from "../../images/icon-deployment-org.png";

const Casestudies = () => {
    return (
        <div className="Expertise">
            <div className="process">
                <div className="process-heading">process</div>
                <div className="process-sub-heading">Software Development Approach</div>
                <div className="process-content">
                    <div className="process-content-col">
                        <img src={icondesigning} alt="icondesigning" className="icondesigning" />
                        <div className="process-content-col-heading">Designing</div>
                        <div className="process-content-col-descrp">Software design usually involves problem-solving and planning a software solution</div>
                    </div>
                    <div className="process-content-col">
                        <img src={icondevelopment} alt="icondevelopment" className="icondevelopment" />
                        <div className="process-content-col-heading">Development</div>
                        <div className="process-content-col-descrp">Developing a design around solution to the problems presented by requirements</div>
                    </div>
                    <div className="process-content-col">
                        <img src={icondeployement} alt="icondeployement" className="icondeployement" />
                        <div className="process-content-col-heading">Deployment</div>
                        <div className="process-content-col-descrp">We are delivering complete solutions and resolving the users problems</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Casestudies;