import React from "react";
import "./AddressCard.scss";
import locationicon from "../../images/icon-region-org.png";
import callicon from "../../images/icon-phone-org.png";
import mailicon from "../../images/icon-envelope-org.png";

const AddressCard = (props) => {
    return (
        <>
            <div className="addressCard">
                <div className="addressCard1">
                    <div className="address-heading">{props.heading1}</div>
                    <div className="address-details">
                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons1" src={locationicon} alt="icon_1" />
                            </div>
                            <div className="address-content1">
                                {props.address1}
                            </div>
                        </div>

                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={callicon} alt="icon_2" />
                            </div>
                            <div className="address-content2">
                                <a href={`tel:{props.phonenumber1}`} className="address-call-mail-p">{props.phonenumber1}</a>
                                
                            </div>
                        </div>

                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={mailicon} alt="icon_3" />
                            </div>
                            <div className="address-content2">
                            <a href={`mailto: {props.email}`} className="address-call-mail-p"> {props.email}
                            </a>
                               
                            </div>

                        </div>

                    </div>
                </div>
                <div className="addressCard2">
                    <div className="address-heading">{props.heading2}</div>
                    <div className="address-details">
                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons1" src={locationicon} alt="icon_1" />
                            </div>
                            <div className="address-content1">
                                {props.address2}
                            </div>

                        </div>

                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={callicon} alt="icon_2" />
                            </div>
                            <div className="address-content2">
                            <a href={`tel:{props.phonenumber2}`} className="address-call-mail-p">{props.phonenumber2}</a>
                                
                            </div>
                        </div>
                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={mailicon} alt="icon_3" />
                            </div>
                            <div className="address-content2">
                            <a href={`mailto: {props.email2}`} className="address-call-mail-p"> {props.email2}
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddressCard;