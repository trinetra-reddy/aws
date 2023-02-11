import React from "react";
import './Casestudies.scss';
import icondesigning from "../../images/icon-designing-org.png";
import icondevelopment from "../../images/icon-development-org.png";
import icondeployement from "../../images/icon-deployment-org.png";

const Casestudies = () => {
    return (
        <div className="casestudies">
            <div className="casestudies-heading">Case studies</div>
            <div className="casestudies-sub-heading">Our latest Work</div>
            <div className="casestudies-content">
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">lorem ipsum</div>
                    <div className="casestudies-content-wraper-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                    <div className="casestudies-content-wraper-btn"><a href="#" class="button">Read More</a></div>
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">lorem ipsum</div>
                    <div className="casestudies-content-wraper-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                    <div className="casestudies-content-wraper-btn"><a href="#" class="button">Read More</a></div>
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">lorem ipsum</div>
                    <div className="casestudies-content-wraper-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookn</div>
                    <div className="casestudies-content-wraper-btn"><a href="#" class="button">Read More</a></div>
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">lorem ipsum</div>
                    <div className="casestudies-content-wraper-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                    <div className="casestudies-content-wraper-btn"><a href="#" class="button">Read More</a></div>
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">lorem ipsum</div>
                    <div className="casestudies-content-wraper-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                    <div className="casestudies-content-wraper-btn"><a href="#" class="button">Read More</a></div>
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">lorem ipsum</div>
                    <div className="Casestudies-content-wraper-desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                    <div className="casestudies-content-wraper-btn"><a href="#" class="button">Read More</a></div>
                </div>
            </div>
            <div className="casestudies-content-wraper-btn"><a href="#" class="button">View More Case Studies</a></div>
            <div className="process">
                <div className="process-heading">process</div>
                <div className="process-sub-heading">Software Development Approach</div>
                <div className="process-content">
                    <div className="process-content-col">
                        <img src={icondesigning} alt="icondesigning" className="icondesigning" />
                        <div className="process-content-col-heading">Designing</div>
                        <div className="process-content-col-descrp">Software design usually involves problem solving and planning a software solution</div>
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