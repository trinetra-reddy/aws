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
                    <div className="casestudies-content-wraper-heading">leading B2C ecom</div>
                    <div className="casestudies-content-wraper-desc">  Developing an eCommerce MultiSite Online Store for Mexico’s Leading B2C of hardgoods and Softline products</div>
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading"> Leading Supplier for Fitness Products (USA)</div>
                    <div className="casestudies-content-wraper-desc">Building an eCom website with 3rd party integration  from scratch for leading suppliers of products which consist of fitness & nutrition products </div>
                    
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">Renowned MNC (USA)</div>
                    <div className="casestudies-content-wraper-desc">Inventory, catalogue data & order management for American multinational corporation that designs, manufactures, and sells airplanes</div>
                
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">Plumbing Products Manufacturer(USA)</div>
                    <div className="casestudies-content-wraper-desc">digital transform and complete restucturing of ecomerce wedsite for leading for plumbing products manufacturer united states</div>
                
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">Leading Home Furnishings(USA)</div>
                    <div className="casestudies-content-wraper-desc">Harmonizing frontend & cloud management for Digital Transformation of a leading Home furnishings products manufacturer </div>
                    
                </div>
                <div className="casestudies-content-wraper">
                    <div className="casestudies-content-wraper-heading">Label Printing Corporation(India)</div>
                    <div className="Casestudies-content-wraper-desc">producing management and distribution channels for various susidaries of the company in various formats for leading label indian company</div>
                    
                </div>
            </div>
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